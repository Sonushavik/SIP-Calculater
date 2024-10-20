import React, {useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import DonutChart from './DonutChart';

const App = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [interestRate, setInterestRate] = useState(12);
  const [year, setYear] = useState(10);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    calculateSIP();
  }, [])


  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const n = parseFloat(year) * 12; // investment period in months
    const r = parseFloat(interestRate) / 100 / 12; // monthly rate

    // Total amount invested
    const investedAmount = P * n;

    // Future value (Total Value)
    const futureValue = P * (((1 + r) ** n - 1) / r) * (1 + r);

    // Estimated returns
    const estimatedReturn = futureValue - investedAmount;

    // Update state
    setTotalInvestment(investedAmount.toFixed(2));
    setTotalReturn(estimatedReturn.toFixed(2));
    setTotalValue(futureValue.toFixed(2));
  };

  const handleMonthlyChange = (e) => {
    const monthlySlider = e.target.value;
    setMonthlyInvestment(monthlySlider * 10000);
    calculateSIP();
  };

  const handleInterestRate = (e) => {
      setInterestRate(e.target.value)
      calculateSIP();
  }

  const handleYearChange = (e) => {
    const yearlider = e.target.value;
    setYear(yearlider/2)
    calculateSIP();
  }

  return (
    <div className="bg-green-900 w-2/3 mx-auto mt-3 border border-black rounded-md">
      <div className="mt-10  text-2xl  mx-auto text-center  font-bold underline my-[20px] py-2  ">SIP Calculator</div>

      <div className=" grid sm:grid-cols-2 justify-center text-sm bg-slate-100 pt-2">
        <div className=" border-slate-400 max-w-[600px]  my-2 mx-auto px-2 "  >
          <div className="flex justify-between ">
            <div className="font-semibold">
              Monthly Investment
            </div>

            <div className="bg-blue-100 p-1 px-2 min-w-[80px] rounded-md font-semibold text-blue-700 flex justify-end">
              ₹<span className="ml-2"> {monthlyInvestment}</span>
            </div>
          </div>
          <div className="mt-1">
            <Slider
              value={monthlyInvestment / 10000}
              aria-label="Default"
              onChange={handleMonthlyChange}
            />
          </div>

          <div className="mt-10">
            <div className="flex justify-between ">
              <div className="font-semibold">
              Expected Return Rate (per annum)
              </div>

              <div className="bg-blue-100 p-1 px-2 min-w-[80px] rounded-md font-semibold text-blue-700 flex justify-end">
                <span className="mr-1 text-center"> {interestRate}</span>%
              </div>
            </div>
            <div className="mt-1">
              <Slider
                value={interestRate}
                aria-label="Default"
                onChange={handleInterestRate}
              />
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between ">
              <div className="font-semibold">
             Tiime Period
              </div>

              <div className="bg-blue-100 p-1 px-2 min-w-[80px] rounded-md font-semibold text-blue-700 flex justify-end">
                <span className="mr-1 text-center"> {year}</span>Yr
              </div>
            </div>
            <div className="mt-1">
              <Slider
                value={year*2 }
                aria-label="Default"
                onChange={handleYearChange}
              />
            </div>
          </div>


          <div className='mt-10'>
            <div className='flex justify-between'>
              <div className='text-md'>
                Invested Amount
              </div>

              <div className='p-1 px-2 min-w-[80px] rounded-md font-semibold flex justify-end'>
                ₹ <span className='mr-1'>{totalInvestment}</span>
              </div>
            </div>
          </div>

          <div className='mt-2'>
            <div className='flex justify-between'>
              <div className=''>
                Est. Return
              </div>
              <div className='p-1 px-2 min-w-[80px] rounded-md font-semibold flex justify-end'>
                ₹ <span className='mr-1'>{totalReturn}</span>
              </div>
            </div>
          </div>

          <div className='mt-2'>
            <div className='flex justify-between'>
              <div className=''>
                Total Value
              </div>
              <div className='p-1 px-2 min-w-[80px] rounded-md font-semibold flex justify-end'>
                ₹ <span className='mr-1'>{totalValue}</span>
              </div>
            </div>
          </div>

      </div>

      <div className="mx-auto sm:ml-2 sm:pt-4">
      <DonutChart investedAmount={totalInvestment} estimatedReturns={totalReturn} /> 
      </div>

    </div>

      
    </div>
  );
};

export default App;
