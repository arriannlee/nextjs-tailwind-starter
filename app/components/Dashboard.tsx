export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-24 bg-surface border-r border-divider">
        <nav className="h-full">
          <ul className="w-full flex flex-col">
            <li className="active w-full flex flex-col items-center justify-center py-4">
              <img src="/icons/logo.svg" alt="Logo" className="w-16 h-16" />
            </li>

            <li className="w-full flex flex-col items-center justify-center gap-1 py-3">
              <img
                src="/icons/account.svg"
                alt="Account"
                className="w-10 h-10"
              />
              <span className="text-sm">Account</span>
            </li>

            <li className="active w-full flex flex-col items-center justify-center gap-1 py-3">
              <img
                src="/icons/dashboard.svg"
                alt="Dashboard"
                className="w-10 h-10"
              />
              <span className="text-sm">Dashboard</span>
            </li>

            <li className="w-full flex flex-col items-center justify-center gap-1 py-3">
              <img src="/icons/course.svg" alt="Course" className="w-10 h-10" />
              <span className="text-sm">Course</span>
            </li>

            <li className="w-full flex flex-col items-center justify-center gap-1 py-3">
              <img
                src="/icons/calendar.svg"
                alt="Calendar"
                className="w-10 h-10"
              />
              <span className="text-sm">Calendar</span>
            </li>

            <li className="w-full flex flex-col items-center justify-center gap-1 py-3">
              <img src="/icons/inbox.svg" alt="Inbox" className="w-10 h-10" />
              <span className="text-sm">Inbox</span>
            </li>

            <li className="w-full flex flex-col items-center justify-center gap-1 py-3">
              <img
                src="/icons/history.svg"
                alt="History"
                className="w-10 h-10"
              />
              <span className="text-sm">History</span>
            </li>

            <li className="w-full flex flex-col items-center justify-center gap-1 py-3">
              <img src="/icons/help.svg" alt="Help" className="w-10 h-10" />
              <span className="text-sm">Help</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main area */}

      <main className="flex-1 p-6 bg-background text-text mt-2">
        <div className="space-y-4">
          <div className="flex border border-divider bg-surface">
            <aside className="w-18 bg-surface border-r border-divider flex items-center justify-center">
              <img
                src="/icons/information.svg"
                alt="Information"
                className="w-10 h-10"
              />
            </aside>

            <div className="bg-background flex-1 p-6">
              <h3 className="font-semibold">Welcome to B&FC 👋🎓</h3>
              <p className="text-sm text-text-secondary">
                <br />
                We’re here to support you every step of the way, from your
                courses and assignments to your timetable and student services.
                <br />
                <br />
                📚 Use your dashboard to stay on top of your work, keep track of
                deadlines, and access everything you need in one place.{" "}
              </p>
              <br />
              <h3 className="font-semibold">🗂️ 💡 Learning support (HELMS) </h3>
              <br />
              <p className="text-sm text-text-secondary">
                If you need extra support with your studies, B&FC offers Higher
                Education Learning Mentors (HELMS), who can help with things
                like academic skills, organisation, and managing your workload.
                Find out more about the support available 👉{" "}
                <a
                  href="https://www.blackpool.ac.uk/higher-education-learning-support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent "
                >
                  www.blackpool.ac.uk/higher-education-learning-support
                </a>{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mt-10 mb-2">
          {/* Left */}
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <img src="/icons/plus.svg" alt="Plus" className="w-6 h-6" />
            <img
              src="/icons/bell.svg"
              alt="Notifications"
              className="w-6 h-6"
            />
            <img src="/icons/dots.svg" alt="Menu" className="w-6 h-6" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Card */}{" "}
          <p className="text-sm border-t border-divider text-text-secondary font-semibold mt-4 pt-4">
            Monday, 20th October 2025
          </p>
          <div className="flex border border-divider bg-surface px-6">
            {" "}
            <aside className="w-64 bg-surface-variant border-divider flex items-center justify-center">
              <p className="text-accent text-sm text-center font-bold">
                DIGITAL MEDIA FOR BUSINESS
                <br />
                XX00001 25/26
              </p>
            </aside>
            <div className="bg-background flex-1 p-6">
              <p className="text-sm text-text-secondary uppercase">
                digital media for business xx00001 25/26
              </p>
              <h3 className="text-accent">
                Formative Assignment: Media in Business Due 20th Oct 10:00am
              </h3>
            </div>
          </div>
          <div className="space-y-4">
            {/* Card */}{" "}
            <p className="text-sm border-t border-divider text-text-secondary font-semibold mt-4 pt-4">
              Thursday, 23rd October 2025{" "}
            </p>
            <div className="flex border-t border-b border-divider bg-surface">
              <aside className="w-64 bg-surface-variant border-r border-divider flex items-center justify-center">
                <p className="text-accent text-sm text-center font-bold">
                  DIGITAL PRACTICE <br />
                  XX0000225/26{" "}
                </p>
              </aside>

              <div className="bg-background flex-1 p-6">
                <p className="text-sm text-text-secondary uppercase">
                  digital PRACTICE xx00002 25/26{" "}
                </p>
                <h3 className="text-accent">
                  formative Assignment: Digital Practice Due 23rd Oct
                  10:00am{" "}
                </h3>
                <p className="text-sm text-text-secondary"></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
