import { useForm, SubmitHandler } from "react-hook-form";
import send from "../images/send.svg";
import { useState } from "react";

interface IFormInput {
  firstName: string;
  secondName: string;
  patronymic: string;
}

export default function FormUser() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Проверяем заполненность полей и устанавливаем ошибки
    const newErrors: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!value) {
        newErrors[key] = "Это поле обязательно для заполнения";
      }
    }
    setErrors(newErrors);

    // Если ошибок нет, отправляем данные
    if (Object.keys(newErrors).length === 0) {
      console.log(data);
    }
  };

  return (
    <div className="formUserWrapper" id="form">
      <h3>Заявка на диагностику</h3>
      <p>
        Доверьте свои медицинские исследования надежным капибарам-лаборантам и
        получите качественные результаты в кратчайшие сроки!
      </p>
      <form className="formUser" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <input
            placeholder="Фамилия"
            {...register("secondName", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /^[A-Za-zА-Яа-яЁё\s]*$/, // Только текст
            })}
            className={errors.secondName ? "error" : ""}
          />
          {errors.secondName && (
            <p className="errorMessage">{errors.secondName}</p>
          )}

          <input
            placeholder="Имя"
            {...register("firstName", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /^[A-Za-zА-Яа-яЁё\s]*$/, // Только текст
            })}
            className={errors.firstName ? "error" : ""}
          />
          {errors.firstName && (
            <p className="errorMessage">{errors.firstName}</p>
          )}

          <input
            placeholder="Отчество"
            {...register("patronymic", {
              required: true,
              maxLength: 20,
              minLength: 2,
              pattern: /^[A-Za-zА-Яа-яЁё\s]*$/, // Только текст
            })}
            className={errors.patronymic ? "error" : ""}
          />
          {errors.patronymic && (
            <p className="errorMessage">{errors.patronymic}</p>
          )}
        </div>

        <button type="submit">
          <img src={send} alt="Отправить" />
        </button>
      </form>
    </div>
  );
}
