import Image from "next/image";
import React from "react";
import avatarPhoto from "../../public/images/avatar.jpeg";
import { IoCalendar, IoTime } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { QRCode } from "antd";
import firstLoc from "../../public/images/firstLoc.png"
import secLoc from "../../public/images/secLoc.png"



const FlightInfo = () => {
  const CustomIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        opacity="0.2"
        d="M15.4331 1.29264L12.0839 2.22264C12.0586 2.22951 12.0337 2.23781 12.0094 2.24749L15.4331 1.29264ZM15.4331 1.29264C15.7898 1.19186 16.0392 1.30202 16.1859 1.41264M15.4331 1.29264L16.1859 1.41264M16.1859 1.41264C16.2845 1.48693 16.3643 1.58331 16.4188 1.69403C16.4734 1.80475 16.5012 1.92672 16.5 2.05014V2.93702C16.5 3.41655 16.2848 3.88202 15.9375 4.15577L13.9664 5.77624L16.1859 1.41264ZM21.7266 7.99955L21.7266 9.26069C21.7231 9.43307 21.6808 9.60245 21.6029 9.75626C21.525 9.91015 21.4134 10.0445 21.2764 10.1493L21.2764 10.1493L21.2757 10.1499L14.1507 16.0116L14.1419 16.0188L14.1422 16.0303L14.2134 18.7383L14.2135 18.7389C14.2242 18.9364 14.228 19.4852 14.228 19.6123C14.2273 20.9055 14.0169 21.9354 13.633 22.6411C13.2496 23.3458 12.6941 23.7261 12 23.7261C11.7813 23.7261 11.4693 23.6824 11.1474 23.4926C10.8257 23.3028 10.4925 22.9662 10.2327 22.3774L10.2327 22.3774C9.92512 21.6816 9.76875 20.7515 9.76875 19.6114C9.76875 19.4856 9.77251 18.9383 9.78326 18.738L9.78327 18.7373L9.85546 16.0298L9.85577 16.0184L9.84694 16.0111L2.72195 10.1349L2.72132 10.1344C2.58495 10.0295 2.47389 9.89522 2.39637 9.7416C2.31887 9.58804 2.27686 9.41903 2.27344 9.24706V7.99952C2.27348 7.87806 2.30397 7.75855 2.36212 7.65192C2.42027 7.54528 2.50423 7.45492 2.60631 7.38911C2.7084 7.32329 2.82536 7.28412 2.94649 7.27518C3.06762 7.26623 3.18906 7.2878 3.29971 7.3379L9.96767 10.3595L9.99999 10.3741L10.0008 10.3386L10.1016 5.8016L10.1018 5.79024L10.093 5.783L8.0882 4.12831L8.08787 4.12805C7.89045 3.971 7.75024 3.8317 7.65878 3.65352C7.56736 3.47543 7.52344 3.25608 7.52344 2.93702L7.52345 2.09702L7.52343 2.09626C7.51927 1.96703 7.54632 1.8387 7.6023 1.72215C7.65826 1.60562 7.74149 1.5043 7.84492 1.42677C7.99063 1.31874 8.23813 1.21164 8.59355 1.31607L8.59385 1.31616L11.9219 2.24519C11.9219 2.2452 11.9219 2.2452 11.9219 2.2452C11.946 2.25201 11.9701 2.26021 11.9939 2.26936L11.9938 2.26968L11.9977 2.27046C12.0031 2.27155 12.0086 2.27155 12.014 2.27046L12.0141 2.27084L12.018 2.26927C12.0416 2.25991 12.0656 2.2519 12.09 2.24526L12.0902 2.24523L15.4394 1.31523L15.4395 1.3152C15.7879 1.21678 16.0298 1.32426 16.1718 1.43136L16.1718 1.43136C16.2675 1.50344 16.3449 1.59695 16.3978 1.70438C16.4507 1.81182 16.4777 1.93017 16.4766 2.04992V2.05014V2.93702C16.4766 3.41005 16.2642 3.86846 15.923 4.13736L15.923 4.13736L15.9226 4.13766L13.9515 5.75813L13.9428 5.7653L13.943 5.77658L14.0105 10.3385L14.011 10.3742L14.0436 10.3595L20.6998 7.33883C20.8104 7.28866 20.9318 7.26701 21.053 7.27586C21.1741 7.28472 21.2911 7.32379 21.3932 7.38951C21.4953 7.45523 21.5793 7.5455 21.6376 7.65207C21.6958 7.75864 21.7264 7.8781 21.7266 7.99955Z"
        fill="#112211"
        stroke="#112211"
        stroke-width="0.046875"
      />
    </svg>
  );

  return (
    <div className="grid grid-cols-12 grid-rows-1">
      <div className="col-span-2 p-6 border-t border-l border-b  flex flex-col gap-4 rounded-tl-2xl rounded-bl-2xl bg-[#EBF6F2]">
        <div>
          <h3 className="text-[32px] font-semibold">12:00 am</h3>
          <p className="text-xs opacity-60 mt-1">Newark(EWR)</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="27"
            viewBox="0 0 38 27"
            fill="none"
          >
            <path
              opacity="0.25"
              d="M37 0.5L19 10.5M1 0.5L19 10.5M19 10.5V26.5"
              stroke="#121"
              stroke-width="0.5"
            />
          </svg>
          <CustomIcon />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="27"
            viewBox="0 0 38 27"
            fill="none"
          >
            <path
              opacity="0.25"
              d="M37 26.5L19 16.5M1 26.5L19 16.5M19 16.5V0.5"
              stroke="#112211"
              stroke-width="0.5"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-[32px] font-semibold">12:00 pm</h3>
          <p className="text-xs opacity-60 mt-1">Newark(EWR)</p>
        </div>
      </div>
      <div className="col-span-7 border-t border-b h-full">
        <div className="flex items-center justify-between bg-[#8dd3bb] p-6 h-[30%]">
          <div className="flex gap-4">
            <Image
              className=" w-12 h-12 rounded-full border border-white object-cover"
              src={avatarPhoto}
              alt=""
            />
            <div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-sm font-normal">Boarding Pass N’123</p>
            </div>
          </div>
          <h4 className="text-sm font-bold">Busniess Class</h4>
        </div>
        <div className="flex flex-col justify-between p-6 pb-4 h-[70%]">
        <div className="grid grid-cols-12 gap-8 ">
          <div className="col-span-3 flex items-center gap-x-2">
            <div className="md:p-[5px] p-1 bg-[#EBF6F2] rounded-[4px]">
              <IoCalendar fill="#8dd3bb" className="md:text-[22px] text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#121] md:text-xs text-[11px] font-semibold opacity-75">
                Date
              </span>
              <h5 className="text-[#121] md:text-base text-sm font-medium">
                12-11-22
              </h5>
            </div>
          </div>
          <div className="col-span-3 flex items-center gap-x-2">
            <div className="md:p-[5px] p-1 bg-[#EBF6F2] rounded-[4px]">
              <IoTime fill="#8dd3bb" className="md:text-[22px] text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#121] md:text-xs text-[11px] font-semibold opacity-75">
                Flight time
              </span>
              <h5 className="text-[#121] md:text-base text-sm font-medium">
                Newark(EWR)
              </h5>
            </div>
          </div>
        <div className="col-span-3 flex items-center gap-x-2">
          <div className="md:p-[5px] p-1 bg-[#EBF6F2] rounded-[4px]">
            <IoTime fill="#8dd3bb" className="md:text-[22px] text-lg" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#121] md:text-xs text-[11px] font-semibold opacity-75">
              Flight time
            </span>
            <h5 className="text-[#121] md:text-base text-sm font-medium">
              Newark(EWR)
            </h5>
          </div>
        </div>
        <div className="col-span-3 flex items-center gap-x-2">
          <div className="md:p-[5px] p-1 bg-[#EBF6F2] rounded-[4px]">
            <MdAirlineSeatReclineNormal
              fill="#8dd3bb"
              className="md:text-[22px] text-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#121] md:text-xs text-[11px] font-semibold opacity-75">
              Seat no.
            </span>
            <h5 className="text-[#121] md:text-base text-sm font-medium">
              128
            </h5>
          </div>
        </div>
        </div>
        <div className="flex justify-between gap-6">
            <div >
                <h2 className="text-[32px] font-bold">EK</h2>
                <p className="text-xs opacity-60">ABC12345</p>
            </div>
            <QRCode value="zafaraka" size={100}/>
        </div>
        </div>
      </div>
      <div className="col-span-3 relative border-t border-r border-b rounded-tr-2xl overflow-hidden bg-white rounded-br-2xl p-6">
    <Image src={firstLoc} className="absolute -top-[6px] -right-6 " alt=""/>
    <svg xmlns="http://www.w3.org/2000/svg" width="275" height="126" className="absolute top-[22%] right-6 -rotate-[9deg] z-10" viewBox="0 0 275 126" fill="none">
  <path d="M1.31445 124.546C27.0433 69.5391 98.0194 -30.7147 273.685 12.3147" stroke="#8DD3BB" stroke-width="2.66161" stroke-dasharray="5.32 5.32"/>
</svg>
    <Image src={secLoc} className="absolute bottom-6 -left-[4px] " alt=""/>
      </div>
    </div>
  );
};

export default FlightInfo;
