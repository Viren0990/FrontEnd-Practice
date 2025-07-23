import { Label } from "@/components/ui/label"; // Assuming these are from shadcn/ui or similar
import { Input } from "@/components/ui/input"; // Assuming these are from shadcn/ui or similar
import Link from 'next/link';

export const SigninAuth = () => {
    return (
        
        <div className="w-full max-w-sm mx-auto space-y-6"> {/* Adjusted space-y and added max-w-sm, mx-auto */}
            {/* Header Section */}
            <div className="text-center pb-4"> {/* Adjusted padding-bottom */}
                <h1 className="text-4xl sm:text-5xl font-semi-bold text-gray-900 mb-2">WELCOME BACK</h1> {/* Adjusted text size and color */}
                <p className="text-gray-600 text-lg">Welcome back! Please enter your details.</p> {/* Adjusted text color and size */}
            </div>

            {/* Email Input Group */}
            <div className="space-y-2"> {/* space-y for label and input */}
                <Label htmlFor="email" className="block text-gray-700 text-base font-medium">Email</Label> {/* Added block and font-medium */}
                <Input type="email" id="email" placeholder="Enter your email" className="h-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" /> {/* Added explicit classes for input consistency */}
            </div>

            {/* Password Input Group */}
            <div className="space-y-2"> {/* space-y for label and input */}
                <Label htmlFor="password" className="block text-gray-700 text-base font-medium">Password</Label> {/* Added block and font-medium */}
                <Input type="password" id="password" placeholder="**********" className="h-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200" /> {/* Added explicit classes for input consistency */}
            </div>

            {/* Remember Me / Forgot Password Section */}
            <div className="flex justify-between items-center text-sm">
                {/* Remember Me Checkbox */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="rememberMe" 
                        className="form-checkbox h-5 w-5 text-primary rounded-md border-gray-300 focus:ring-primary focus:ring-offset-2" // Best practices for forms plugin
                    />
                    <label htmlFor="rememberMe" className="ml-2 text-gray-600 cursor-pointer select-none">
                        Remember me
                    </label>
                </div>
                {/* Forgot Password Link */}
                <div>
                    <Link href="/forgot-password" className="text-primary hover:underline font-medium"> {/* Using Link and text-primary */}
                        Forgot password
                    </Link>
                </div>
            </div>

            {/* Sign In Button */}
            <div>
                <button className="w-full bg-[#EA454C] h-12 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition duration-200">Sign in</button> {/* Used 'primary' and refined classes */}
            </div>


            {/* Don't have an account? Section */}
            <div className="pt-2 text-center"> {/* Adjusted padding top and centered */}
                <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/signup">
                        <span className="text-[#EA454C] hover:underline cursor-pointer font-medium">
                            Sign up for free
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    );
};