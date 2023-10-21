interface TopicBubblesProps {
    topic: string
}
export const TopicBubbles = ({ topic }: TopicBubblesProps) => {
    return (
        <div className="box-border rounded px-4 py-2 bg-nord-6">{topic}</div>
    )
}