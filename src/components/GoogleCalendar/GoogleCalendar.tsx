"use client"
const GoogleCalendar = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden border border-[#00e0ff33] shadow-lg transition hover:border-[#00e0ff]">
                <iframe
                    className="w-full h-[750px] md:h-[850px]"
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0NpMVFdyYhC5h_J1fNiSILzwgeKj0PEs6lBw46hPDmF_PLQGUi4uP9p8VqPMX9Wbxdm9Xe-ISv?gv=true"
                    title="Agenda Google - Prise de rendez-vous"
                    allow="geolocation; microphone; camera; display-capture"
                    loading="lazy"
                ></iframe>
            </div>

        </div>
    )
}

export default GoogleCalendar
