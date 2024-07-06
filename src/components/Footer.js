const Footer = ()=>{
    return (
        <div className="text-center">

            <footer className=" text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Programs</h2>
                    <ul className="text-gray-400">
                        <li className="mb-2"><a href="#" className="hover:underline">Data Science & AI</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Product Management</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Business Analytics</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Digital Transformation</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Business Management</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Project Management</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Strategy & Leadership</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Senior Management</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Fintech</a></li>
                    </ul>
                </div>


                <div className="text-gray-300">
                    <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                    <p className="mb-2">Email us (For Data Science Queries): admissions@accredian.com</p>
                    <p className="mb-2">Email us (For Product Management Queries): pm@accredian.com</p>
                    <p className="mb-2">Data Science Admission Helpline: +91 9000000000</p>
                    <p className="mb-2">Product Management Admission Helpline: +91 9625811095</p>
                    <p className="mb-2">Enrolled Student Helpline: +91 7999232507</p>
                    <p className="mb-2">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
                    <h2 className="text-lg font-semibold mb-4 mt-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Accredian</h2>
                    <ul className="text-gray-400">
                    <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Career</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Admission Policy</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Referral Policy</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Terms Of Service</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Master FAQs</a></li>
                    </ul>
                </div>
                </div>

                <div className="mt-12 text-center">
                <p className="text-sm">&copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
                </div>
            </div>
            </footer>

        </div>
    )
}

export default Footer