import { BsCheckCircleFill } from "react-icons/bs";
const Faq = () => {
  return (
    <div className="px-6 md:px-48 mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div>
            <h1 className="text-6xl font-bold">
              FAQ (Frequently Asked Questions)
            </h1>{" "}
            <br />
            <br />
            <p className="text-xl font-medium">
              Mauris ut lectus facilisi curabitur bibendum. Amet posuere proin
              tortor, duis porttitor habitant amet, rutrum. Egestas fermentum
              facilisi sit ut mi congue nunc neque mattis.
            </p>
            <br />
            <p className="text-xl font-medium">
              Sed donec dignissim neque vitae. Mauris tellus bibendum aliquet
              bibendum phasellus congue. Elit vulputate.
            </p>
            <br />
            <h3 className="flex text-xl my-2 font-medium">
              <BsCheckCircleFill className="mt-1 mr-6" /> Sit amet pharetra aliquet
              molestie.
            </h3>
            <h3 className="flex text-xl my-2 font-medium">
              <BsCheckCircleFill className="mt-1 mr-6" />
              Pellentesque vestibulum nisl donec at.
            </h3>
            <h3 className="flex text-xl my-2 font-medium">
              <BsCheckCircleFill className="mt-1 mr-6" />
              Vitae at mauris ultricies ut adipiscing.
            </h3>
            <h3 className="flex text-xl my-2 font-medium">
              <BsCheckCircleFill className="mt-1 mr-6" />
              Eleifend nec dolor sapien mi. Morbi.
            </h3>
          </div>
        </div>
        <div className="gap-8 mt-16 text-black">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-gradient-to-r from-blue-600 to-cyan-300 my-3">
            <div className="collapse-title text-2xl font-bold">
              Can i cancel my subscription at any time?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Mauris ut lectus facilisi curabitur bibendum. Amet posuere proin
                tortor, duis porttitor habitant amet, rutrum. Egestas fermentum
                facilisi sit ut mi congue nunc neque mattis.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-gradient-to-r from-blue-600 to-cyan-300 my-3">
            <div className="collapse-title text-2xl font-bold">
              How to us join to member and payment on studen’t?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Mauris ut lectus facilisi curabitur bibendum. Amet posuere proin
                tortor, duis porttitor habitant amet, rutrum. Egestas fermentum
                facilisi sit ut mi congue nunc neque mattis.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-gradient-to-r from-blue-600 to-cyan-300 my-3">
            <div className="collapse-title text-2xl font-bold">
              Can be Student’s used on multiple platforms?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Mauris ut lectus facilisi curabitur bibendum. Amet posuere proin
                tortor, duis porttitor habitant amet, rutrum. Egestas fermentum
                facilisi sit ut mi congue nunc neque mattis.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-gradient-to-r from-blue-600 to-cyan-300 my-3">
            <div className="collapse-title text-2xl font-bold">
              Are all the teachers on the platform professionals?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Mauris ut lectus facilisi curabitur bibendum. Amet posuere proin
                tortor, duis porttitor habitant amet, rutrum. Egestas fermentum
                facilisi sit ut mi congue nunc neque mattis.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-gradient-to-r from-blue-600 to-cyan-300 my-3">
            <div className="collapse-title text-2xl font-bold">
              How to find the right class for me?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Mauris ut lectus facilisi curabitur bibendum. Amet posuere proin
                tortor, duis porttitor habitant amet, rutrum. Egestas fermentum
                facilisi sit ut mi congue nunc neque mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
