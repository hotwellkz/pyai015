import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Политика конфиденциальности | PyAI Teacher';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              На главную
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Политика конфиденциальности
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2>1. Общие положения</h2>
              <p>
                Настоящая политика конфиденциальности описывает, как PyAI Teacher собирает,
                использует и защищает информацию, которую вы предоставляете при использовании
                нашей платформы.
              </p>

              <h2>2. Сбор информации</h2>
              <p>Мы собираем следующие типы информации:</p>
              <ul>
                <li>Адрес электронной почты</li>
                <li>Имя пользователя</li>
                <li>Прогресс обучения</li>
                <li>Статистика использования платформы</li>
              </ul>

              <h2>3. Использование информации</h2>
              <p>Собранная информация используется для:</p>
              <ul>
                <li>Предоставления образовательных услуг</li>
                <li>Улучшения качества обучения</li>
                <li>Персонализации контента</li>
                <li>Технической поддержки</li>
              </ul>

              <h2>4. Защита информации</h2>
              <p>
                Мы применяем современные технологии безопасности для защиты ваших
                персональных данных от несанкционированного доступа.
              </p>

              <h2>5. Cookies</h2>
              <p>
                Мы используем cookies для улучшения пользовательского опыта и анализа
                использования платформы.
              </p>

              <h2>6. Передача данных третьим лицам</h2>
              <p>
                Мы не передаем ваши персональные данные третьим лицам без вашего
                явного согласия, за исключением случаев, предусмотренных законодательством.
              </p>

              <h2>7. Изменения в политике конфиденциальности</h2>
              <p>
                Мы оставляем за собой право вносить изменения в данную политику
                конфиденциальности. Все изменения будут опубликованы на этой странице.
              </p>

              <h2>8. Контакты</h2>
              <p>
                Если у вас есть вопросы относительно нашей политики конфиденциальности,
                пожалуйста, свяжитесь с нами по адресу: support@pyaiteacher.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}