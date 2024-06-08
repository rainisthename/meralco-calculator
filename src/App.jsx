import { useState, useEffect } from 'react';

function App() {
  const [currentKilowatts, setCurrentKilowatts] = useState('');
  const [previousKilowatts, setPreviousKilowatts] = useState('303.9');
  const [totalValue, setTotalValue] = useState(0);
  const [killowatsUsed, setKillowatsUsed] = useState(0)

  useEffect(() => {
    const current = parseFloat(currentKilowatts);
    const previous = parseFloat(previousKilowatts);
    if (!isNaN(current) && !isNaN(previous)) {
      const difference = current - previous;
      const total = difference * 11.44;
      setTotalValue(total);
      setKillowatsUsed(difference)
    } else {
      setTotalValue(0);
    }
  }, [currentKilowatts, previousKilowatts]);

  return (
    <>
      <div className="text-center flex flex-col items-center justify-center min-h-screen">
        <p className="font-Poppins pb-10">Meralco Calculator</p>
        <div className="w-[50%] flex flex-col items-center border-2 p-10">
          <input
            type="number"
            className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Current Kilowatts"
            value={currentKilowatts}
            onChange={(e) => setCurrentKilowatts(e.target.value)}
          />
          <input
            type="number"
            name="Previous Kilowatts"
            className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Previous Kilowatts"
            value={previousKilowatts}
            onChange={(e) => setPreviousKilowatts(e.target.value)}
          />
          <p className="font-Poppins text-sm text-gray-400 pb-10">
            PS: The current Meralco rate right now is PHP 11.44
          </p>
          <p className="font-Poppins text-sm text-gray-800 pb-10 font-bold">
            Total Value: {totalValue.toFixed(2)}
          </p>
          <p className="font-Poppins text-sm text-gray-800 pb-10 font-bold">
            Killowats Used: {killowatsUsed.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
