export interface Message {
    id: number;
    text: string;
    seen?: boolean;
    userId: number;
    createdAt: string;
    updatedAt?: string;
}