import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import timeformat from '../../lib/timeformat.js';

const PayNow = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [method, setMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // card fields
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  // esewa field
  const [esewaId, setEsewaId] = useState('');

  useEffect(() => {
    const state = location.state;
    try {
      const stored = JSON.parse(localStorage.getItem('bookings') || '[]');

      if (state && state.bookingId) {
        const found = stored.find(b => b._id === state.bookingId);
        setBooking(found || null);
        return;
      }

      if (state && (state.show || state.bookedSeats)) {
        setBooking(state);
        return;
      }

      if (stored.length) {
        setBooking(stored[stored.length - 1]);
        return;
      }
    } catch (e) {
      // ignore
    }

    setBooking(null);
  }, [location.state]);

  const currency = import.meta.env.VITE_CURRENCY || '$';

  const persistPaid = paidBooking => {
    try {
      const stored = JSON.parse(localStorage.getItem('bookings') || '[]');
      if (paidBooking && paidBooking._id) {
        const idx = stored.findIndex(b => b._id === paidBooking._id);
        if (idx !== -1) {
          stored[idx] = { ...stored[idx], ...paidBooking };
        } else {
          stored.push(paidBooking);
        }
        localStorage.setItem('bookings', JSON.stringify(stored));
      }
    } catch (e) {
      console.error('persistPaid', e);
    }
  };

  const handleCardPayment = () => {
    setError('');
    if (!cardName || cardNumber.replace(/\s+/g, '').length < 12 || !cardExpiry || cardCvc.length < 3) {
      setError('Please complete valid card details');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const paid = { ...booking, isPaid: true };
      persistPaid(paid);
      setLoading(false);
      alert('Card payment successful');
      navigate('/my-booking');
    }, 1000);
  };

  const handleEsewaPayment = () => {
    if (!esewaId) {
      setError('Please enter your Esewa ID/phone');
      return;
    }

    setError('');
    setLoading(true);
    // simulate redirect/verification
    setTimeout(() => {
      const paid = { ...booking, isPaid: true };
      persistPaid(paid);
      setLoading(false);
      alert('Esewa payment verified');
      navigate('/my-booking');
    }, 1200);
  };

  const handleCashPayment = () => {
    if (!confirm('Confirm you will pay cash at counter?')) return;
    setLoading(true);
    setTimeout(() => {
      const paid = { ...booking, isPaid: true };
      persistPaid(paid);
      setLoading(false);
      alert('Cash payment recorded');
      navigate('/my-booking');
    }, 800);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!booking) return setError('No booking to pay for');

    if (method === 'card') handleCardPayment();
    else if (method === 'esewa') handleEsewaPayment();
    else handleCashPayment();
  };

  if (!booking) {
    return (
      <div className=" flex items-center justify-center text-gray-400">No booking selected.</div>
    );
  }

  const movie = booking.show?.movie || booking.movie || {};
  const seats = booking.bookedSeats || booking.seats || [];
  const time = booking.show?.showDateTime || booking.time || null;
  const amount = booking.amount || booking.show?.showPrice || 0;

  // determine theater for display
  const theater = booking.theater || (booking.theaterId ? dummyTheatersData.find(t => t.id === booking.theaterId) : null);

  return (
    <div className=" min-h-screen mt-18 text-white px-6 md:px-16 lg:px-40 py-12">
      <h1 className="text-3xl font-bold mb-6">Secure Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-[#0f0b0d] p-6 rounded-xl border border-white/10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex gap-3">
              <label className={`px-4 py-2 rounded-lg cursor-pointer ${method==='card' ? 'bg-[#F84565] text-white' : 'bg-white/5 text-white/80'}`}>
                <input className="hidden" type="radio" name="method" value="card" checked={method==='card'} onChange={() => setMethod('card')} />
                Card
              </label>
              <label className={`px-4 py-2 rounded-lg cursor-pointer ${method==='esewa' ? 'bg-[#F84565] text-white' : 'bg-white/5 text-white/80'}`}>
                <input className="hidden" type="radio" name="method" value="esewa" checked={method==='esewa'} onChange={() => setMethod('esewa')} />
                Esewa
              </label>
              <label className={`px-4 py-2 rounded-lg cursor-pointer ${method==='cash' ? 'bg-[#F84565] text-white' : 'bg-white/5 text-white/80'}`}>
                <input className="hidden" type="radio" name="method" value="cash" checked={method==='cash'} onChange={() => setMethod('cash')} />
                Cash
              </label>
            </div>

            {method === 'card' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-300">Name on card</label>
                  <input value={cardName} onChange={e=>setCardName(e.target.value)} className="w-full mt-1 p-3 rounded-lg bg-white/5" placeholder="Full name" />
                </div>
                <div>
                  <label className="text-sm text-gray-300">Card number</label>
                  <input value={cardNumber} onChange={e=>setCardNumber(e.target.value)} className="w-full mt-1 p-3 rounded-lg bg-white/5" placeholder="4111 1111 1111 1111" />
                </div>
                <div>
                  <label className="text-sm text-gray-300">Expiry (MM/YY)</label>
                  <input value={cardExpiry} onChange={e=>setCardExpiry(e.target.value)} className="w-full mt-1 p-3 rounded-lg bg-white/5" placeholder="08/26" />
                </div>
                <div>
                  <label className="text-sm text-gray-300">CVC</label>
                  <input value={cardCvc} onChange={e=>setCardCvc(e.target.value)} className="w-full mt-1 p-3 rounded-lg bg-white/5" placeholder="123" />
                </div>
              </div>
            )}

            {method === 'esewa' && (
              <div>
                <label className="text-sm text-gray-300">Esewa ID / Phone</label>
                <input value={esewaId} onChange={e=>setEsewaId(e.target.value)} className="w-full mt-1 p-3 rounded-lg bg-white/5" placeholder="Enter Esewa mobile or ID" />
                <p className="text-xs text-gray-500 mt-2">You will be redirected to Esewa flow (simulated).</p>
              </div>
            )}

            {method === 'cash' && (
              <div className="text-sm text-gray-300">You will pay at the counter. Please have exact cash ready.</div>
            )}

            {error && <div className="text-sm text-red-400">{error}</div>}

            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-sm text-gray-400">Amount</div>
                <div className="text-2xl font-semibold">{currency}{amount}</div>
              </div>

              <button disabled={loading} type="submit" className="px-6 py-3 bg-[#F84565] rounded-full font-medium hover:bg-[#fa2e53] transition disabled:opacity-60">
                {loading ? 'Processing...' : `Pay ${currency}${amount}`}
              </button>
            </div>
          </form>
        </div>

        <aside className="bg-[#0b0708] p-6 rounded-xl border border-white/5">
          <div className="flex gap-4">
            <img src={movie.poster_path} alt={movie.title} className="w-20 h-28 object-cover rounded-md" />
            <div>
              <div className="font-semibold">{movie.title}</div>
              <div className="text-sm text-gray-400">{timeformat(movie.runtime)}</div>
              <div className="text-sm text-gray-400 mt-2">Show: {time ? new Date(time).toLocaleString() : 'TBD'}</div>
              <div className="text-sm text-gray-400">Location: {theater?.location || JSON.parse(localStorage.getItem('selectedLocation') || 'null')?.location || 'Unknown'}</div>
              <div className="text-sm text-gray-400">Theater: {theater?.name || JSON.parse(localStorage.getItem('selectedLocation') || 'null')?.name || 'Unknown'}</div>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-300">
            <div><span className="text-gray-400">Seats:</span> {seats.join(', ') || 'None'}</div>
            <div className="mt-2"><span className="text-gray-400">Tickets:</span> {seats.length}</div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PayNow;
