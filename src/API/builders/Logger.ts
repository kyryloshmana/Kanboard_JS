import pino from "pino";

export const logger = pino({
    level: process.env.LOG_Level ?? 'debug', // читає зміну середовича, якщо вона не задана, буде debug
    transport: process.env.CI // куди і як виводити логи, якщо CI=true, виводиться в СCI, інакше underfine -> json в консоль в форматі нище 
        ? undefined
        : {
            target: 'pino-pretty', // перетворює лог в зручний для користувача вигляд
            options: {
                colorize: true, // кольоровий вивід в терміналі
                translateTime: 'SYS:HH:MM:ss', // час у форматі системного часового поясу
                ignore: 'pid,hostname' // прибирає поля pid, hostname
            }
        }
})