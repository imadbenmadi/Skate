
import { Link } from "react-router-dom";

function CardCours({ img, title, dec, price }) {
  return (
      // <div className="flex flex-col max-w-sm mx-auto bg-white  w-[98%] h-[90%] rounded-xl overflow-hidden border border-solid shadow-lg border-[color:var(--Neutral-Light-Grey-50,#E9F0F8)]">
      <div className="flex flex-col max-w-sm mx-auto bg-white  w-[98%] h-full rounded-xl overflow-hidden border border-solid shadow-lg border-[color:var(--Neutral-Light-Grey-50,#E9F0F8)]">
          {/* <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-16 pb-6 pl-4 w-full text-sm leading-5  whitespace-nowrap aspect-[1.23]">
              <img
                  // loading="lazy"
                  src={img}
                  className="object-cover absolute inset-0 size-full "
              />
          </div> */}
          <div className=" overflow-hidden relative flex-col items-start h-[150px] md:h-[250px]  w-full  text-sm shrink-0 ">
              <img
                  // loading="lazy"
                  src={img}
                  className="object-cover absolute inset-0 size-full  "
              />
          </div>
          <div className="flex flex-col justify-between px-4 py-2.5 w-full h-full bg-white rounded-none">
              <div className=" flex flex-col items-start">
                  <div className="flex gap-5 justify-between font-semibold">
                      <div className="flex-auto text-md leading-6 text-black">
                          {title}
                      </div>
                      {/* <div className="flex-auto text-xl leading-7 text-right text-orange-500">
                        {price} DA{" "}
                      </div> */}
                  </div>
                  <div className=" mt-2 md:mt-4 text-sm leading-7 text-zinc-500 ">
                      {dec}
                  </div>
              </div>

              <Link
                  to={"/en/Courses"}
                  className="justify-center self-center px-6 py-3 mb-6 md:mb-0 mt-2 md:mt-6 text-base font-medium leading-6 text-center text-white whitespace-nowrap bg-green rounded-lg"
              >
                  View Course
              </Link>
          </div>
      </div>
  );
}

export default CardCours;
