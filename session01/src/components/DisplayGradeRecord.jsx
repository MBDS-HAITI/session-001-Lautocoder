export default function DisplayGradeRecord({ gradeRecord }) {
  return (
    <div class="w-sm m-2 bg-white rounded-xl shadow-black shadow-2xl overflow-hidden md:max-w-md transform transition duration-500 hover:scale-105">
      <div class="md:flex">
        <div class="w-full p-6">
          <div class="flex items-center justify-between border-b pb-3 mb-4">
            <div class="uppercase tracking-wider text-sm font-bold text-indigo-600">
              Résultat d'Examen
            </div>
            <div class="text-3xl font-extrabold text-green-600">
              {gradeRecord.grade}
            </div>
          </div>

          <h1 class="text-xl font-semibold text-gray-900 mb-1">
            {gradeRecord.student.lastname.toUpperCase()} {gradeRecord.student.firstname}
          </h1>
          <p class="text-sm text-gray-500 mb-4">
            ID Étudiant : {gradeRecord.student.id}
          </p>

          <div class="space-y-3">
            <div class="flex justify-between items-center text-gray-700">
              <span class="font-medium flex items-center">
                <svg
                  class="w-5 h-5 mr-2 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.468 9.58 4.215 7.6 4.215s-4.416 1.253-5.6 2.038M12 6.253c1.168-.785 2.42-2.038 4.4-2.038s4.416 1.253 5.6 2.038M12 6.253V20m0-13C10.832 5.468 9.58 4.215 7.6 4.215s-4.416 1.253-5.6 2.038M12 6.253c1.168-.785 2.42-2.038 4.4-2.038s4.416 1.253 5.6 2.038M12 6.253V20"
                  ></path>
                </svg>
                Cours :
              </span>
              <span class="font-bold text-gray-900">{gradeRecord.course}</span>
            </div>
            <div class="flex justify-between items-center text-gray-700">
              <span class="font-medium flex items-center">
                <svg
                  class="w-5 h-5 mr-2 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-4 11H8m8 0h-4m-4 4h4m-4 0h4m-4-8h4m-4 0h4M4 19v-4h16v4a2 2 0 01-2 2H6a2 2 0 01-2-2zM4 9h16v2H4V9z"
                  ></path>
                </svg>
                Date :
              </span>
              <span class="font-bold text-gray-900">
                {new Date(gradeRecord.date).toLocaleString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div class="flex justify-between items-center text-gray-700">
              <span class="font-medium flex items-center">
                <svg
                  class="w-5 h-5 mr-2 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20v-6a2 2 0 012-2h2a2 2 0 012 2v6m0 0a2 2 0 01-2 2h-2a2 2 0 01-2-2m0 0a2 2 0 002-2h2a2 2 0 002 2M14 10H8m4 4v4m0-4h4m0 0a2 2 0 100-4h-4a2 2 0 100 4z"
                  ></path>
                </svg>
                ID Unique :
              </span>
              <span class="font-bold text-gray-900">
                {gradeRecord.unique_id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
