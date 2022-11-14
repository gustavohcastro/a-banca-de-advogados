import * as S from './styles';
import React, {FormEvent, useRef, useState} from "react";
import {mask, unMask} from "remask";
// import api from "../../service/api";
// import Modal, {ModalHandles} from "../Modal";

enum FILTER_FORM_ENUM {
    SUBJECT = 'assunto',
    AUTHOR = 'autor',
    
}

enum AUTHOR_OPTIONS {
    MELKIS = 1,
    FELIPE = 2,
    JOAO = 3
}

interface FILTER_FORM_TYPE {
    [FILTER_FORM_ENUM.SUBJECT]: string;
    [FILTER_FORM_ENUM.AUTHOR]: string;
}



export function FilterForm() {
    const initialValues = {
        [FILTER_FORM_ENUM.SUBJECT]: '',
        [FILTER_FORM_ENUM.AUTHOR]: '',
        
    }
    const [formData, setFormData] = useState<FILTER_FORM_TYPE>(initialValues as FILTER_FORM_TYPE);
    // const modal = useRef<ModalHandles | null>(null);

    const onWrite = (e: any) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData(initialValues);
        // modal.current?.openModal();
    }

    return (
        <S.ContainerForm>
            <S.Container>
                <div className="form-filter-div">
                    <form
                        name="filter-form"
                        onSubmit={onSubmit}
                    >
                        <div className='field-wrapper'>
                            <label htmlFor='assunto'>Assunto</label>
                            <input
                                id="assunto"
                                name={FILTER_FORM_ENUM.SUBJECT}
                                value={formData[FILTER_FORM_ENUM.SUBJECT]}
                                onChange={onWrite}
                                type="text"
                                // required
                            />
                        </div>
                        <div className='field-wrapper'>
                        <label htmlFor='autor'>Autor</label>
                            <select
                                id="autor"
                                name={FILTER_FORM_ENUM.AUTHOR}
                                placeholder='Autor'
                                value={formData[FILTER_FORM_ENUM.AUTHOR]}
                                onChange={onWrite}
                            >
                                <option value={null}></option>
                                <option value={AUTHOR_OPTIONS.MELKIS}>Dr. Melkis Cardoso</option>
                                <option value={AUTHOR_OPTIONS.FELIPE}>Dr. Felipe André Dani</option>
                                <option value={AUTHOR_OPTIONS.JOAO}>Dr. João Pedro Felisberto</option>
                            </select>
                        </div>
                        <button type="submit" className='btn-enviar'>Buscar</button>
                    </form>
                </div>
            </S.Container>
            {/* <Modal ref={modal}>
                <S.ContainerModal className={"nx-flex-center-center"}>
                    <h2 className={"titleFormModal"}>Obrigado!</h2>
                    <p>Em breve entraremos em contato!</p>
                    <button onClick={() => modal.current?.closeModal() }>
                        OK
                    </button>
                </S.ContainerModal>
            </Modal> */}
        </S.ContainerForm>
    )
}
