import {type SubmitHandler, useForm, useWatch} from "react-hook-form";
import {Path} from "@/common/constants";
import {useNavigate, useSearchParams} from "react-router-dom";
import s from './SearchFormInputs.module.css'

export type SearchFormInputsType = {
    query: string
}

export const SearchFormInputs = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const initialQuery = searchParams.get('query') || '';

    const {register, handleSubmit, control} = useForm<SearchFormInputsType>({defaultValues: {query: initialQuery}})

    const isQueryValue = useWatch({control, name: 'query'})

    //disable when field is empty
    const isDisabled = !isQueryValue?.trim()

    const navigate = useNavigate()


    const onSubmit: SubmitHandler<SearchFormInputsType> = (data) => {
        const encodedQuery = encodeURIComponent(data.query)
        navigate(`${Path.Search}?query=${encodedQuery}`)
    }

    // const handleOnChange = (e:number)=>{
    //     onChange(e)
    // }

    return (
        <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <input
                className={s.styledInput}
                onInput={(e) => {
                    if (e.currentTarget.value === '') {
                        setSearchParams('')
                    }
                }}
                {...register('query')}
                placeholder={'Search for a movie'}
                type={"search"}
            />
            <button className={s.styledButton} disabled={isDisabled} type={'submit'}>Search</button>
        </form>
    )
}