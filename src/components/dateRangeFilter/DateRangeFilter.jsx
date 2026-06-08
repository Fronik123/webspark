import DatePickerField from "./DatePickerField";
import styles from "./DateRangeFilter.module.css";

export default function DateRangeFilter({
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
}) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Date</span>

      <div className={styles.inputs}>
        <DatePickerField
          placeholder="from"
          value={dateFrom}
          onChange={onDateFromChange}
          maxDate={dateTo ?? undefined}
        />

        <DatePickerField
          placeholder="to"
          value={dateTo}
          onChange={onDateToChange}
          minDate={dateFrom ?? undefined}
        />
      </div>
    </div>
  );
}
