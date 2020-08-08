import { Day, DayStatus } from "./day.model";

export class Challenge {
    constructor(
        public title: string,
        public description: string,
        public year: number,
        public month: number,
        private _days: Day[] = []
    ) {
        if (_days.length > 0) return;
        // this.curYear = new Date().getFullYear();
        // this.curMonth = new Date().getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i < daysInMonth + 1; i++) {
            const date = new Date(year, month, i);
            const dayInWeek = date.getDay();
            _days.push({
                dayInMonth: i,
                dayInWeek: dayInWeek,
                date: date,
                status: DayStatus.Open,
            });
        }
    }

    get currentDay(): Day {
        return this._days.find((d) => d.dayInMonth === new Date().getDate());
    }

    get days(): Day[] {
        return [...this._days];
    }
}
