import axios from "axios";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";
import { handlerError } from "../Helpers/ErrorHandler";

const api="http://localhost:5296/api/portfolio/";

//không đồng bộ vì nó được đưa lên mạng ko biết khi nào nó kết thúc 
export const portfolioAddAPI=async (symbol:string) => {
    try {
        const data=await axios.post<PortfolioPost>(api+`?symbol=${symbol}`);
        return data;
    } catch(error) {
        handlerError(error)
    }
};

export const portfolioDeleteAPI=async (symbol:string) => {
    try {
        const data=await axios.delete<PortfolioPost>(api+`?symbol=${symbol}`);
        return data;
    } catch(error) {
        handlerError(error)
    }
};

export const portfolioGetAPI=async () => {
    try {
        const data=await axios.get<PortfolioGet[]>(api);
        return data;
    } catch(error) {
        handlerError(error)
    }
}