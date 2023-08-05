const ExtraSection = () => {
  return (
    <>
      <div
        className="hero min-h-screen bg-fixed mt-52"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/piano-practice-room-with-acoustic-board_258219-188.jpg)"
        }}>
        <div className="hero-overlay bg-opacity-30 bg-primary"></div>
        <div className="hero-content text-center text-white">
          <div>
            <h1 className="mb-9 text-7xl font-bold">
              Interactive Learning <br /> Platform For All Ages
            </h1>
            <p className="mb-5 text-xl">
              Etiam dictum aliquam ultrices eu. Cras nisi, gravida dolor diam
              egestas <br /> pellentesque neque morbi quis. Aliquam nisl in
              malesuada eu sit. <br /> Pellentesque at magna ipsum placerat
              tincidunt. Tortor augue.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
              <div>
                <h1 className="text-6xl mb-3 font-bold">1.280K</h1>
                <p className="text-xl text-gray-400 font-semibold">
                  Partnership
                </p>
              </div>
              <div>
                <h1 className="text-6xl mb-3 font-bold">1.200K</h1>
                <p className="text-xl text-gray-400 font-semibold">
                  People Joined
                </p>
              </div>
              <div>
                <h1 className="text-6xl mb-3 font-bold">320K</h1>
                <p className="text-xl text-gray-400 font-semibold">
                  User Active
                </p>
              </div>
              <div className="ml-0 md:ml-52 lg:ml-0">
                <h1 className="text-6xl mb-3 font-bold">3.2M</h1>
                <p className="text-xl text-gray-400 font-semibold">
                  Earning Month
                </p>
              </div>
              <div className="ml-0 md:ml-64 lg:ml-0">
                <h1 className="text-6xl mb-3 font-bold">100K</h1>
                <p className="text-xl text-gray-400 font-semibold">
                  Classes Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraSection;
