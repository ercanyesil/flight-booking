import React from "react";
import styled from "styled-components";
import { Seat } from "@/types";
import Tooltip from "../common/Tooltip";
import { useEffect, useState } from "react";
import { fetchOccupiedSeatsInfo } from "@/services/api";

interface SeatMapProps {
  seats: Seat[];
  onSeatSelect: (seat: Seat) => void;
}

interface PassengerInfo {
  seatId: number;
  passengerName: string;
}

const SeatMap: React.FC<SeatMapProps> = ({ seats, onSeatSelect }) => {
  const [occupiedSeatsInfo, setOccupiedSeatsInfo] = useState<PassengerInfo[]>([]);

  useEffect(() => {
    const loadPassengerInfo = async () => {
      const data = await fetchOccupiedSeatsInfo();
      setOccupiedSeatsInfo(data);
    };
    loadPassengerInfo();
  }, []);

  return (
    <SeatContainer>
      <svg
        width="360"
        height="260"
        viewBox="0 0 460 337"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_15515_180538" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M230 0C205.054 0 170.691 20.0295 136.191 53.742C119.915 69.6814 103.516 88.1749 88.1239 109.474C76.447 125.414 65.1621 143.03 55.0775 161.226C48.7082 172.511 42.8155 184.502 37.3309 196.492C14.8815 245.536 0.0262146 283.445 0.000106812 336.859L4.57764e-05 337H230H460L460 336.859C459.974 283.445 445.119 245.536 422.669 196.492C417.184 184.502 411.292 172.511 404.923 161.226C394.838 143.03 383.553 125.414 371.876 109.474C356.484 88.1749 340.085 69.6814 323.809 53.742C289.309 20.0295 254.946 0 230 0Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M230 0C205.054 0 170.691 20.0295 136.191 53.742C119.915 69.6814 103.516 88.1749 88.1239 109.474C76.447 125.414 65.1621 143.03 55.0775 161.226C48.7082 172.511 42.8155 184.502 37.3309 196.492C14.8815 245.536 0.0262146 283.445 0.000106812 336.859L4.57764e-05 337H230H460L460 336.859C459.974 283.445 445.119 245.536 422.669 196.492C417.184 184.502 411.292 172.511 404.923 161.226C394.838 143.03 383.553 125.414 371.876 109.474C356.484 88.1749 340.085 69.6814 323.809 53.742C289.309 20.0295 254.946 0 230 0Z"
          fill="white"
        />
        <path
          d="M136.191 53.742L135.493 53.0268L135.492 53.0275L136.191 53.742ZM88.1239 109.474L88.9306 110.065L88.9344 110.06L88.1239 109.474ZM55.0775 161.226L55.9483 161.718L55.9521 161.711L55.0775 161.226ZM37.3309 196.492L38.2402 196.908L38.2403 196.908L37.3309 196.492ZM0.000106812 336.859L-0.999893 336.858V336.858L0.000106812 336.859ZM4.57764e-05 337L-0.999954 337L-1.00039 338H4.57764e-05V337ZM460 337V338H461L461 337L460 337ZM460 336.859L461 336.858V336.858L460 336.859ZM422.669 196.492L421.76 196.908L421.76 196.908L422.669 196.492ZM404.923 161.226L404.048 161.711L404.052 161.718L404.923 161.226ZM371.876 109.474L371.066 110.06L371.069 110.065L371.876 109.474ZM323.809 53.742L324.508 53.0275L324.507 53.0268L323.809 53.742ZM136.89 54.4572C154.096 37.644 171.246 24.2652 187.177 15.0955C203.124 5.91687 217.774 1 230 1V-1C217.28 -1 202.275 4.09787 186.18 13.3621C170.068 22.6353 152.787 36.1274 135.493 53.0268L136.89 54.4572ZM88.9344 110.06C104.29 88.8112 120.65 70.3603 136.891 54.4565L135.492 53.0275C119.179 69.0025 102.742 87.5386 87.3134 108.889L88.9344 110.06ZM55.9521 161.711C66.0167 143.551 77.2789 125.97 88.9306 110.065L87.3172 108.883C75.615 124.857 64.3075 142.509 54.2028 160.741L55.9521 161.711ZM38.2403 196.908C43.7177 184.934 49.5975 172.969 55.9483 161.718L54.2066 160.734C47.8189 172.052 41.9133 184.07 36.4215 196.076L38.2403 196.908ZM1.00011 336.859C1.02611 283.669 15.8044 245.923 38.2402 196.908L36.4216 196.076C13.9585 245.15 -0.973676 283.221 -0.999893 336.858L1.00011 336.859ZM1.00005 337L1.00011 336.859L-0.999893 336.858L-0.999954 337L1.00005 337ZM230 336H4.57764e-05V338H230V336ZM230 338H460V336H230V338ZM461 337L461 336.858L459 336.859L459 337L461 337ZM461 336.858C460.974 283.221 446.041 245.15 423.578 196.076L421.76 196.908C444.196 245.923 458.974 283.669 459 336.859L461 336.858ZM423.578 196.076C418.087 184.07 412.181 172.052 405.793 160.734L404.052 161.718C410.402 172.969 416.282 184.934 421.76 196.908L423.578 196.076ZM405.797 160.741C395.693 142.509 384.385 124.857 372.683 108.883L371.069 110.065C382.721 125.97 393.983 143.551 404.048 161.711L405.797 160.741ZM372.687 108.889C357.258 87.5386 340.821 69.0025 324.508 53.0275L323.109 54.4565C339.349 70.3603 355.71 88.8112 371.066 110.06L372.687 108.889ZM324.507 53.0268C307.213 36.1274 289.932 22.6353 273.82 13.3621C257.725 4.09787 242.72 -1 230 -1V1C242.226 1 256.876 5.91687 272.823 15.0955C288.754 24.2652 305.904 37.644 323.11 54.4572L324.507 53.0268Z"
          fill="#DDDEE2"
          mask="url(#path-1-inside-1_15515_180538)"
        />
        <g opacity="0.1">
          <path
            d="M234.21 98L324.906 133.575L317.269 188.632L234.21 158.139V98Z"
            fill="#008CFF"
          />
          <path
            d="M330.966 135.27L376.791 214.044L348.15 240.302L323.328 192.868L330.966 135.27Z"
            fill="#008CFF"
          />
          <path
            d="M378.699 219.126L405 297.496C390.053 299.732 374.894 291.857 368.053 278.302L351.013 244.537L378.699 219.126Z"
            fill="#008CFF"
          />
          <path
            d="M225.79 98L135.094 133.575L142.731 188.632L225.79 158.139V98Z"
            fill="#008CFF"
          />
          <path
            d="M129.034 135.27L83.2088 214.044L111.85 240.302L136.672 192.868L129.034 135.27Z"
            fill="#008CFF"
          />
          <path
            d="M81.3011 219.126L55.0003 297.496C69.9469 299.732 85.1062 291.857 91.947 278.302L108.987 244.537L81.3011 219.126Z"
            fill="#008CFF"
          />
        </g>
        <rect x="1" y="335" width="458" height="2" fill="white" />
      </svg>

      <PlaneShape>

        <SeatLegend>
          <LegendItem>
            <LegendBox color="#fff" />
            <span>Boş</span>
          </LegendItem>
          <LegendItem>
            <LegendBox color="#ffd700" />
            <span>Seçili</span>
          </LegendItem>
          <LegendItem>
            <LegendBox color="#ccc" />
            <span>Dolu</span>
          </LegendItem>
        </SeatLegend>

        <SeatsGrid>
          {seats.map((seat) => {
            const passengerInfo = occupiedSeatsInfo.find(info => info.seatId === seat.id);
            return (
              <Tooltip 
                key={seat.id} 
                text={seat.isOccupied && passengerInfo ? passengerInfo.passengerName : ""}
                showTooltip={seat.isOccupied}
              >
                <SeatButton
                  key={seat.id}
                  isOccupied={seat.isOccupied}
                  isSelected={seat.isSelected}
                  onClick={() => onSeatSelect(seat)}
                >
                  {seat.number}
                </SeatButton>
              </Tooltip>
            );
          })}
        </SeatsGrid>

      </PlaneShape>

    </SeatContainer>
  );
};

export default SeatMap;

const SeatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   gap: 20px;
  margin: 20px 0;
`;

const PlaneShape = styled.div`
  width: 356px;
  background-color: white;
  border-right: 1px solid #dddee2;
  border-left: 1px solid #dddee2;
  box-sizing: border-box;
  margin: auto;
  padding-bottom: 25px;
`;

const SeatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 5px;
  padding: 40px 10px;
`;

const SeatButton = styled.button<{ isOccupied: boolean; isSelected: boolean }>`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  color: black;
  background-color: ${(props) =>
    props.isOccupied ? "#ccc" : props.isSelected ? "#ffd700" : "#fff"};
  cursor: ${(props) => (props.isOccupied ? "not-allowed" : "pointer")};
  border-radius: 4px;

  &:hover:not(:disabled) {
    background-color: ${(props) => (props.isSelected ? "#ffd700" : "#e6e6e6")};
  }
`;

const SeatLegend = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

const LegendItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  gap: 5px;
`;

const LegendBox = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border: 1px solid #ccc;
  border-radius: 4px;
`;
