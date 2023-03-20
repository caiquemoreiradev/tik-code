import { MdOutlineVideocamOff } from 'react-icons/md';
import { BiCommentX } from 'react-icons/bi';

interface IProps {
    text: string;
}

export function NoResults({ text }: IProps) {

    return (
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <p className='text-8xl'>
                {text === 'No Videos' ? <MdOutlineVideocamOff /> : <BiCommentX />}
            </p>
            <p className='text-2xl text-center'>{text}</p>
        </div>
    );
};