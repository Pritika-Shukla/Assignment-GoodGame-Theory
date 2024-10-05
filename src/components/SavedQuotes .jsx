// eslint-disable-next-line react/prop-types
const SavedQuotes = ({ savedQuotes = [] }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4 w-full max-w-sm m-auto">
      <h3 className="text-xl font-bold mb-4">Saved Quotes</h3>
      {savedQuotes.length === 0 ? (
        <p className="text-gray-600">No quotes saved yet.</p>
      ) : (
        <ul>
          {savedQuotes.map((quote, index) => (
            <li key={index} className="mb-2 ml-2 list-disc">
              {quote}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedQuotes;
