import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from '../component/Layout';
//  student
import Index from '../page/student/Index';
import Create from '../page/student/Create';
import Detail from '../page/student/Detail';
import Edit from '../page/student/Edit';

// subject
import { Index as IndexSubject } from '../page/subject/Index';
import { Create as CreateSubject } from '../page/subject/Create';

// register
import { Index as IndexRegister } from '../page/register/Index';




export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    {/* Student */}
                    <Route path="" element={<Index />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/student/:slug" element={<Detail />} />
                    <Route path="/student/edit/:slug" element={<Edit />} />

                    {/* Subject */}
                    <Route path="/subject" element={<IndexSubject />} />
                    <Route path="/subject/create" element={<CreateSubject />} />


                    {/* Register */}
                    <Route path="/register" element={<IndexRegister />} />
                </Route>
            </Routes>
        </>
    )
}
