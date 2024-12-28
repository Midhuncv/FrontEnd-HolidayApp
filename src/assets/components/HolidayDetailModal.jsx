const HolidayDetailModal = ({ holiday, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">{holiday.name}</h3>
        <p className="mb-2">
          <strong>Date:</strong> {holiday.date.iso}
        </p>
        <p className="mb-2">
          <strong>Type:</strong> {holiday.type.join(", ")}
        </p>
        <p className="mb-2">
          <strong>Description:</strong> {holiday.description || "N/A"}
        </p>
        <button
          onClick={closeModal}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HolidayDetailModal;
