import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GraduationCap, User, Calculator, BookOpen, Users } from 'lucide-react';

const studentInfoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  registrationNumber: z.string().min(5, 'Registration number must be at least 5 characters'),
  cutoffMarks: z.number()
    .min(0, 'Cutoff marks must be at least 0')
    .max(200, 'Cutoff marks cannot exceed 200'),
  groupStudied: z.enum(['Biology', 'Bio-Maths', 'Computer Science', 'Economics']),
  casteCategory: z.enum(['General', 'OBC', 'SC', 'ST']),
});

type StudentInfoForm = z.infer<typeof studentInfoSchema>;

export default function StudentInfo() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<StudentInfoForm>({
    resolver: zodResolver(studentInfoSchema),
  });

  const onSubmit = (data: StudentInfoForm) => {
    console.log(data);
    navigate('/recommendations');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
          <div className="flex items-center justify-center mb-8">
            <GraduationCap className="h-12 w-12 text-purple-400" />
          </div>
          
          <h2 className="text-center text-3xl font-bold text-white mb-8">
            Student Information
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('name')}
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white bg-opacity-10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Registration Number
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Calculator className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('registrationNumber')}
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white bg-opacity-10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter registration number"
                />
              </div>
              {errors.registrationNumber && (
                <p className="mt-1 text-sm text-red-400">{errors.registrationNumber.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Cutoff Marks (out of 200)
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Calculator className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('cutoffMarks', { valueAsNumber: true })}
                  type="number"
                  min="0"
                  max="200"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white bg-opacity-10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter cutoff marks"
                />
              </div>
              {errors.cutoffMarks && (
                <p className="mt-1 text-sm text-red-400">{errors.cutoffMarks.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Group Studied
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <BookOpen className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  {...register('groupStudied')}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white bg-opacity-10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select group</option>
                  <option value="Biology">Biology</option>
                  <option value="Bio-Maths">Bio-Maths</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Economics">Economics</option>
                </select>
              </div>
              {errors.groupStudied && (
                <p className="mt-1 text-sm text-red-400">{errors.groupStudied.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Caste Category
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  {...register('casteCategory')}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white bg-opacity-10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select category</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </select>
              </div>
              {errors.casteCategory && (
                <p className="mt-1 text-sm text-red-400">{errors.casteCategory.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}