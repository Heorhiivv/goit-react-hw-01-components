import React from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const randomColor = () => {
    let random1 = Math.round(Math.random() * 255);
    let random2 = Math.round(Math.random() * 255);
    let random3 = Math.round(Math.random() * 255);
    return `rgb(${random1}, ${random2}, ${random3})`;
  };
  let background = randomColor();
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {stats.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{ backgroundColor: background }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
