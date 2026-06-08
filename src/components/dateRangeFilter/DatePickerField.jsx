import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import styles from "./DateRangeFilter.module.css";

import clearIcon from "../../assets/clear.svg";
import calendarIcon from "../../assets/calendar.svg";

export default function DatePickerField({
  placeholder,
  value,
  onChange,
  maxDate,
  minDate,
}) {
  const containerRef = useRef(null);
  const fpRef = useRef(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (!containerRef.current) return;

    fpRef.current = flatpickr(containerRef.current, {
      wrap: true,
      dateFormat: "d-m-Y",
      disableMobile: true,
      allowInput: false,
      maxDate,
      minDate,
      onChange: (selectedDates) => {
        onChangeRef.current(selectedDates[0] ?? null);
      },
    });

    return () => {
      fpRef.current?.destroy();
    };
  }, [maxDate, minDate]);

  useEffect(() => {
    if (!fpRef.current) return;
    fpRef.current.set("maxDate", maxDate ?? null);
    fpRef.current.set("minDate", minDate ?? null);
  }, [maxDate, minDate]);

  useEffect(() => {
    if (!fpRef.current) return;

    if (value) {
      fpRef.current.setDate(value, false);
    } else {
      fpRef.current.clear();
    }
  }, [value]);

  return (
    <div className={`flatpickr ${styles.field}`} ref={containerRef}>
      <input
        type="text"
        data-input
        placeholder={placeholder}
        readOnly
        className={styles.input}
      />

      <button
        type="button"
        data-clear
        className={styles.actionBtn}
        aria-label="Clear date"
      >
        <img src={clearIcon} alt="Clear date" />
      </button>

      <button
        type="button"
        data-toggle
        className={styles.actionBtn}
        aria-label="Open calendar"
      >
        <img src={calendarIcon} alt="Calendar" />
      </button>
    </div>
  );
}
