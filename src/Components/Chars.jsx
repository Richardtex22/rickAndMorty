import React,  { useEffect } from 'react';
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import charById from "../Helpers/charById";
import { Link } from 'react-router-dom';
import CardDetails from './CardDetails';

const Chars = ({ match }) => {
    const id = match.params.id;

    useEffect(() =>{
        window.scrollTo(0,0);
    }, []);

    const { loading, error, data } = useQuery(charById, {
        variables: { id }
    });

    if (error) {
        return <h2 className="text-5xl">Houston we have problems</h2>;
    }
    if (loading) return <Loading />;

    return (
        <section className="bg-fixed min-h-screen w-full bg-gray-800 relative">
            <div className="w-full bg-center h-146 absolute  text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex m-8 sm:my-4 sm:ml-12">
                    <Link to="/Characters">
                        <button className="flex justify-around items-center hover:border-white">
                    <svg className="h-6 w-6 text-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                            <span className="text-lg tracking-normal">Return</span>
                        </button>
                    </Link>
                </div>
                <CardDetails data={data.character} />
            </div>
        </section>
    )

};

export default Chars;