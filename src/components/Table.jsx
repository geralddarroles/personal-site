import React, { useState, useEffect, useLayoutEffect } from "react";
import useFadeAnimation from "./useFadeAnimation";

const AnimatedTableRow = ({ index, col1, col2 }) => {
  const [opacity, fadeIn, reset] = useFadeAnimation();

  useEffect(() => {
    setTimeout(() => {
      reset();
      fadeIn(0);
    }, 500 * index);
  }, []);

  return (
    <tr
      className="grid grid-cols-2 pb-6 mt-20 border-b-2 border-purple-300 lg:w-3/4 place-items-start min-w-[30rem] lg:min-w-[60rem]"
      key={index}
      style={{ opacity: opacity }}
    >
      <td className="text-lg font-bold lg:text-3xl p">{col1}</td>
      <td>{col2}</td>
    </tr>
  );
};

const Table = ({ skillsTableData, id }) => {
  const [isVisible, setVisible] = useState(false);

  const observer = new IntersectionObserver((element) => {
    if (element[0].isIntersecting === true) {
      setVisible(true);
    }
  });

  useLayoutEffect(() => {
    const element = document.getElementById(id);
    observer.observe(element);
  }, []);

  const { heading, tableRows } = skillsTableData;

  return (
    <table id={id} className="mb-20 lg:w-3/4">
      <thead>
        <tr>
          <th>
            <h3 className="px-10 font-bold text-purple-800 lg:self-center">
              {heading}
            </h3>
          </th>
        </tr>
      </thead>
      <tbody className="flex flex-col items-center">
        {tableRows.map((item, index) => {
          const { col1, col2 } = item;

          if (!isVisible) {
            return <div key={index}></div>;
          }

          return <AnimatedTableRow index={index} col1={col1} col2={col2} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
