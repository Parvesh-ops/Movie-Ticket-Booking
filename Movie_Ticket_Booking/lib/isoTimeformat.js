


const isoTimeformat = (dateTime) => {
  const date = new Date(dateTime);
  
  // Format the time in HH:MM (12-hour format)
  const localTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div>
      {localTime}
    </div>
  );
};

export default isoTimeformat;
