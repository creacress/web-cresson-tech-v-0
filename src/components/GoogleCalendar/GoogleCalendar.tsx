// components/GoogleCalendar.tsx
const GoogleCalendar = () => {
    return (
      <div className="flex justify-center p-4">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=Europe%2FParis&showPrint=0&src=YWxleGlzLjkzMTkwQG91dGxvb2suZnI&src=MjgxNjhjZDMyMGE2ZTEzY2I1N2ZkODY2NDdkODgyZDM3YzZmZjliY2MwNjg4MmJlMzY2ZTJhZDI2MTdhODYxZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237CB342&color=%230B8043"
          style={{
            border: "none",
            width: "100%",
            height: "800px",
            maxWidth: "900px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          title="Agenda Google"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleCalendar;
  

//src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FParis&showPrint=0&src=YWxleGlzLjkzMTkwQG91dGxvb2suZnI&src=MjgxNjhjZDMyMGE2ZTEzY2I1N2ZkODY2NDdkODgyZDM3YzZmZjliY2MwNjg4MmJlMzY2ZTJhZDI2MTdhODYxZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237CB342&color=%230B8043"