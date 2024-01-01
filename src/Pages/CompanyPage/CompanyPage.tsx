import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCompanyProfile } from '../../api';
import { CompanyProfile } from '../../company';

interface Props {}

function CompanyPage({}: Props) {
    let { ticker }=useParams();
    const [company, setCompany]=useState<CompanyProfile>();

    useEffect(()=>{
        const getProlfileInit=async () => {
            const result =await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        }
        getProlfileInit();  
    },[])
  return (
    <>
    {company?(
        <div>{company.companyName}</div>
    ) : (
        <div>Company not found!</div>
    )}
    </>
  )
}

export default CompanyPage