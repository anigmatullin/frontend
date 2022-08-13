
export type Task = {
    id: string;
    text: string;
    done: boolean;
}

export type Store = {
    tasks: Task[];
}
