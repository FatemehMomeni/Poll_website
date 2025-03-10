import { v7 as uuidv7 } from 'uuid';

const questionBank = [
    {
        "id": uuidv7(),
        "type": "test",
        "question": "چقدر از محتوا و سرفصل‌های دوره راضی هستی؟",
        "options": ["خیلی زیاد", "زیاد", "متوسط", "کم", "خیلی کم"]
    },
    {
        "id": uuidv7(),
        "type": "test",
        "question": "پروژه‌ها و تکالیف چقدر با آموزش‌ها تناسب داشتن؟",
        "options": ["خیلی زیاد", "زیاد", "متوسط", "کم", "خیلی کم"]
    },
    {
        "id": uuidv7(),
        "type": "test",
        "question": "از مدرس دوره و نحوه تدریس چقدر رضایت داری؟",
        "options": ["خیلی زیاد", "زیاد", "متوسط", "کم", "خیلی کم"]
    },
    {
        "id": uuidv7(),
        "type": "multipleChoice",
        "question": "از نظر تو مهم‌ترین ویژگی این دوره چیه؟",
        "options": ["مدرس", "محتوای آموزشی", "پروژه‌محور بودن", "قیمت مناسب", "همه موارد"]
    },
    {
        "id": uuidv7(),
        "type": "annotation",
        "question": "به نظرت برای بهتر شدن دوره، چه سرفصل‌هایی اضافه یا حذف بشه؟",
        "options": ['headlines']
    },
    {
        "id": uuidv7(),
        "type": "annotation",
        "question": ".انتقادات و پیشنهاداتت رو پذیرا هستیم",
        "options": ['comments']
    }
]

export default questionBank;
