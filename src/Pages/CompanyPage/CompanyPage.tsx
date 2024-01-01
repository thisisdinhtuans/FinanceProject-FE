import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCompanyProfile } from '../../api';
import { CompanyProfile } from '../../company';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';

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
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

        <Sidebar />
        <CompanyDashboard><Tile title="Company Name" subTitle={company.companyName}></Tile>
        </CompanyDashboard>
      </div>
    ) : (
        <div>Company not found!</div>
    )}
    </>
  )
}

export default CompanyPage