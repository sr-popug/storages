"use client";
import sendMessage from "@/shared/api/sendMessage";
import { PRICE_FOR_SQUARE_METER } from "@/shared/lib/constants";
import numWord from "@/shared/scripts/numWord";
import { Inputs } from "@/shared/types/inputs";
import { Input } from "@/shared/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/shared/ui/input-otp";
import { Label } from "@/shared/ui/label";
import { Room } from "@prisma/client";
import { useCallback, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function RentForm({ room }: { room: Room }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<Inputs>({ mode: "onTouched" });
  const [disable, setDisable] = useState(false);

  const handlePhoneChange = useCallback(
    (value: string) => {
      // Оставляем только цифры и обрезаем до 10 символов
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setValue("phone", digitsOnly, { shouldValidate: true });
      return digitsOnly;
    },
    [setValue]
  );
  const submitForm: SubmitHandler<Inputs> = async data => {
    setDisable(true);
    sendMessage({ ...data, room })
      .then(() => {
        location.replace("/rent/success");
        setDisable(false);
      })
      .catch(() => {
        toast.error("Ошибка отправки, повторите позже");
        setDisable(false);
      });
  };
  const formatPhoneDisplay = (value: string = "") => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
      6,
      8
    )}-${digits.slice(8, 10)}`;
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      onError={() => console.log(errors)}
      className='mt-5 bg-neutral-900 rounded-xl px-5 py-2 pb-5'
    >
      <h3 className='text-2xl  font-bold gap-2 items-center mt-5 mb-1'>
        Заполните данные для оплаты
      </h3>
      <div className='flex gap-x-20 gap-y-5 flex-wrap'>
        {" "}
        <div className='mt-3'>
          <Label className='text-[16px]' htmlFor=''>
            Оплатить сразу
          </Label>
          <div className='flex items-center gap-2'>
            <Input
              {...register("months", {
                required: "Укажите количество месяцев",
                min: {
                  value: 1,
                  message: "Минимум 1 месяц",
                },
                valueAsNumber: true,
              })}
              id='months'
              min={1}
              step={1}
              className={`mt-1 text-lg w-17 appearance-none ${
                errors.months && "border border-red-700"
              }`}
              placeholder='1'
              defaultValue={1}
              type='number'
              onInput={e => {
                // Запрещаем ввод значений меньше 1
                if (Number(e.currentTarget.value) < 1)
                  e.currentTarget.value = "1";
              }}
            />
            <div className='w-16'>месяц{numWord(Number(watch("months")))} </div>
            <span className='text-neutral-600 w-22 text-nowrap'>
              ={" "}
              {room.size.reduce((calc, a, i, array) => {
                if (i % 2 == 1) {
                  calc += Number(
                    ((array[i] * array[i - 1]) / 10000).toFixed(1)
                  );
                  return calc;
                }
                return calc;
              }, 0) *
                PRICE_FOR_SQUARE_METER *
                Number(watch("months"))}{" "}
              ₽
            </span>
          </div>
          <p className='text-sm text-red-700 mt-1'>{errors.months?.message}</p>
        </div>
        <div>
          <div className='mt-3'>
            <p>Ваше имя</p>
            <Input
              type='text'
              {...register("name", {
                required: { value: true, message: "Введите имя" },
              })}
              id='name'
              className={`mt-1 text-lg w-64 ${
                errors.name?.message && "border border-red-700"
              }`}
              title='Формат: Фамилия Имя'
              placeholder='ФИО'
            />
            <p className='text-sm text-red-700 mt-1'>{errors.name?.message}</p>
          </div>
          <div className='mt-3'>
            <p className='mb-1'>Номер телефона</p>

            {/* Мобильная версия */}
            <div className='flex items-center gap-2 sm:hidden'>
              +7
              <Controller
                name='phone'
                control={control}
                rules={{
                  required: "Введите номер телефона",
                  minLength: {
                    value: 10,
                    message: "Номер должен содержать 10 цифр",
                  },
                  pattern: { value: /^\d{10}$/, message: "Только цифры" },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    value={formatPhoneDisplay(field.value)}
                    onChange={e =>
                      field.onChange(handlePhoneChange(e.target.value))
                    }
                    className={`max-w-50  ${
                      errors.phone && "border border-red-700"
                    }`}
                    type='tel'
                    placeholder='(912) 345-67-89'
                    maxLength={16} // С учетом скобок и дефисов
                  />
                )}
              />
            </div>

            {/* Десктопная версия */}
            <div className='hidden sm:block'>
              <Controller
                name='phone'
                control={control}
                rules={{
                  required: "Введите номер телефона",
                  minLength: {
                    value: 10,
                    message: "Номер должен содержать 10 цифр",
                  },
                  pattern: { value: /^\d{10}$/, message: "Только цифры" },
                }}
                render={({ field }) => (
                  <div className='flex items-center gap-1'>
                    <span>+7</span>
                    <InputOTP
                      maxLength={10}
                      value={field.value || ""}
                      onChange={value =>
                        field.onChange(handlePhoneChange(value))
                      }
                    >
                      <InputOTPGroup>
                        <InputOTPSlot
                          className={errors.phone && "border border-red-800"}
                          index={0}
                        />
                        <InputOTPSlot
                          className={errors.phone && "border border-red-800"}
                          index={1}
                        />
                        <InputOTPSlot
                          className={errors.phone && "border border-red-800"}
                          index={2}
                        />
                      </InputOTPGroup>
                      <span>(</span>
                      <InputOTPGroup>
                        <InputOTPSlot
                          className={errors.phone && "border border-red-800"}
                          index={3}
                        />
                        <InputOTPSlot
                          className={errors.phone && "border border-red-800"}
                          index={4}
                        />
                        <InputOTPSlot
                          className={errors.phone && "border border-red-800"}
                          index={5}
                        />
                      </InputOTPGroup>
                      <span>)</span>
                      <InputOTPGroup>
                        <InputOTPSlot
                          className={errors.phone && "border border-red-800"}
                          index={6}
                        />
                        <InputOTPSlot
                          className={errors.phone && "border border-red-800"}
                          index={7}
                        />
                      </InputOTPGroup>
                      <span>-</span>
                      <InputOTPGroup>
                        <InputOTPSlot
                          className={errors.phone && "border border-red-800"}
                          index={8}
                        />
                        <InputOTPSlot
                          className={errors.phone && "border border-red-800"}
                          index={9}
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                )}
              />
            </div>

            <p className='text-sm text-red-700 mt-1'>{errors.phone?.message}</p>
          </div>
          <p className='text-sm mt-1 text-neutral-600 max-w-110'>
            После оплаты мы сообщим вам
            <span className='font-semibold'> телефон</span> на который нужно
            позвонить, для открытия замка.
          </p>
        </div>
      </div>
      <div className='mt-12'>
        <hr className='mb-6' />

        <p className='flex gap-2 justify-between text-xl font-bold'>
          К оплате сейчас{" "}
          <span className='text-nowrap'>
            {room.size.reduce((calc, a, i, array) => {
              if (i % 2 == 1) {
                calc += Number(((array[i] * array[i - 1]) / 10000).toFixed(1));
                return calc;
              }
              return calc;
            }, 0) *
              PRICE_FOR_SQUARE_METER *
              Number(watch("months"))}{" "}
            ₽
          </span>
        </p>

        <p className='text-sm mt-1 mb-4 text-neutral-500 flex justify-between gap-1'>
          Следующая оплата (через {watch("months")} месяц
          {numWord(Number(watch("months")))} ){" "}
          <span className='text-nowrap'>
            {room.size.reduce((calc, a, i, array) => {
              if (i % 2 == 1) {
                calc += Number(((array[i] * array[i - 1]) / 10000).toFixed(1));
                return calc;
              }
              return calc;
            }, 0) * PRICE_FOR_SQUARE_METER}
            ₽ / мес
          </span>
        </p>
      </div>

      <div className='relative mt-3'>
        <button
          disabled={disable}
          type='submit'
          className=' block text-center py-2 px-15 bg-red-800 transition-colors rounded-full w-full hover:bg-red-900 font-bold'
        >
          {disable ? "Загрузка..." : "Арендовать кладовку"}
        </button>
      </div>
    </form>
  );
}
