// components/GoogleCalendar.tsx
import styles from "@/styles/GoogleCalendar.module.css";

const GoogleCalendar = () => {
    return (
        <div className={styles.iframeContainer}>
            <iframe
                className={styles.iframeGoogleCalendar}
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0NpMVFdyYhC5h_J1fNiSILzwgeKj0PEs6lBw46hPDmF_PLQGUi4uP9p8VqPMX9Wbxdm9Xe-ISv?gv=true"
                title="Agenda Google - Prise de rendez-vous"
                allow="geolocation; microphone; camera; display-capture"
            ></iframe>
        </div>
    );
};

export default GoogleCalendar;
