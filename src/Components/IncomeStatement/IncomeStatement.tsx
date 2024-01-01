import React, { useEffect, useState } from 'react'
import { CompanyIncomeStatement } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getIncomeStatement } from '../../api';
import Table from '../Table/Table';

type Props = {}

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Total Revenue",
    render: (company: CompanyIncomeStatement) => company.revenue,
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) => company.netIncome,
  },
  {
    label: "Operating Expenses",
    render: (company: CompanyIncomeStatement) => company.operatingExpenses,
  },
  {
    label: "Cost of Revenue",
    render: (company: CompanyIncomeStatement) => company.netIncome,
  },
];


const IncomeStatement = (props: Props) => {
  const ticker=useOutletContext<string>();
  const [IncomeStatement, setIncomeStatement]=
  useState<CompanyIncomeStatement[]>();
  useEffect(()=>{
    const IncomeStatementFetch=async() => {
      const result=await getIncomeStatement(ticker);
      setIncomeStatement(result!.data);
    };
    IncomeStatementFetch();
  },[])
  return (
    <>
    {IncomeStatement?(<><Table config={configs} data={IncomeStatement}/></>):(<>Loading...</>)}
    </>
  )
}

export default IncomeStatement