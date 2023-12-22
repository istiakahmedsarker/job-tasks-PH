import React from "react";

const AudienceSection = () => {
    return (
        <section className="py-16 bg-[#131313] text-[#b5b2b6]">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">Who Can Benefit from Daily Docket?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Developer Card */}
                    <div className="p-6 bg-[#333333] rounded-md shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-[#b5b2b6]">Developers</h3>
                        <p className="text-[#b5b2b6]">
                            Stay organized and manage your coding tasks efficiently using Daily Docket. Prioritize your work and increase productivity.
                        </p>
                    </div>

                    {/* Corporate Professionals Card */}
                    <div className="p-6 bg-[#333333] rounded-md shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-[#b5b2b6]">Corporate Professionals</h3>
                        <p className="text-[#b5b2b6]">
                            Manage your daily tasks, meetings, and deadlines seamlessly. Daily Docket helps corporate professionals stay on top of their responsibilities.
                        </p>
                    </div>

                    {/* Bankers Card */}
                    <div className="p-6 bg-[#333333] rounded-md shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-[#b5b2b6]">Bankers</h3>
                        <p className="text-[#b5b2b6]">
                            Organize your financial tasks and appointments. Daily Docket provides a structured approach to managing your banking-related activities.
                        </p>
                    </div>

                    {/* Add more cards for different user groups */}
                </div>
            </div>
        </section>
    );
};

export default AudienceSection;
