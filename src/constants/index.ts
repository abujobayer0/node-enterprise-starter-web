import {
  BookOpen,
  Code,
  Database,
  FileText,
  Rocket,
  Server,
  Settings,
  Shield,
  Star,
  Terminal,
  Users,
  Lock,
} from "lucide-react";

export const Technologies = [
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "Custom Authentication",
  "User Management",
  "Logging",
  "MVC Pattern",
  "RESTful API",
  "JWT",
];

export const Features = [
  {
    icon: Server,
    text: "Express Server",
    color: "text-indigo-500",
    delay: 0.1,
  },
  {
    icon: Database,
    text: "MongoDB Ready",
    color: "text-emerald-500",
    delay: 0.2,
  },
  {
    icon: Lock,
    text: "Custom Auth",
    color: "text-purple-500",
    delay: 0.3,
  },
  {
    icon: Terminal,
    text: "Interactive CLI",
    color: "text-amber-500",
    delay: 0.4,
  },
  {
    icon: BookOpen,
    text: "User Management",
    color: "text-blue-500",
    delay: 0.5,
  },
  {
    icon: FileText,
    text: "TypeScript Support",
    color: "text-cyan-500",
    delay: 0.6,
  },
  {
    icon: Shield,
    text: "Security Ready",
    color: "text-red-500",
    delay: 0.7,
  },
  {
    icon: Rocket,
    text: "Performance Optimized",
    color: "text-orange-500",
    delay: 0.8,
  },
  {
    icon: Code,
    text: "API Testing",
    color: "text-pink-500",
    delay: 0.9,
  },
  {
    icon: Settings,
    text: "Easy Configuration",
    color: "text-teal-500",
    delay: 1.0,
  },
];

export const Metrics = [
  { value: "10k+", label: "Downloads", icon: Users },
  { value: "200+", label: "GitHub Stars", icon: Star },
  { value: "99%", label: "Test Coverage", icon: Shield },
];
export const PackageManagers = ["npx", "yarn", "pnpm", "bunx"];

export const commands: Record<string, string> = {
  npx: "npx node-enterprise-starter",
  yarn: "yarn dlx node-enterprise-starter",
  bunx: "bunx node-enterprise-starter",
  pnpm: "pnpm dlx node-enterprise-starter",
};

export const links = [
  { href: "/docs", label: "Documentation" },
  {
    href: "https://github.com/abujobayer0/node-enterprise-starter.git",
    label: "GitHub",
  },
  { href: "mailto:zubayer.munna.dev@gmail.com", label: "Support" },
];
export const envConfig = [
  {
    key: "NODE_ENV",
    value: "development",
    desc: "Application environment",
  },
  {
    key: "PORT",
    value: "8000",
    desc: "Server port",
  },
  {
    key: "DATABASE_URL",
    value: "mongodb://localhost:27017/myapp",
    desc: "MongoDB connection string",
  },
  {
    key: "BCRYPT_SALT_ROUNDS",
    value: "10",
    desc: "Password hashing strength",
  },
  {
    key: "JWT_ACCESS_SECRET",
    value: "supersecretaccesskey123",
    desc: "JWT access token secret key",
  },
  {
    key: "JWT_ACCESS_EXPIRES_IN",
    value: "7d",
    desc: "JWT access token expiry",
  },
  {
    key: "JWT_REFRESH_SECRET",
    value: "supersecretrefreshkey456",
    desc: "JWT refresh token secret key",
  },
  {
    key: "JWT_REFRESH_EXPIRES_IN",
    value: "30d",
    desc: "JWT refresh token expiry",
  },
  {
    key: "EMAIL_USER",
    value: "noreply@myapp.com",
    desc: "Email service username",
  },
  {
    key: "EMAIL_PASSWORD",
    value: "password123",
    desc: "Email service password",
  },
  {
    key: "RESET_LINK_URL",
    value: "https://myapp.com/reset-password",
    desc: "Password reset link URL",
  },
  {
    key: "CLIENT_URL",
    value: "http://localhost:3000",
    desc: "Frontend application URL",
  },
  {
    key: "ADMIN_PROFILE_IMAGE_LINK",
    value: "https://myapp.com/images/admin-profile.png",
    desc: "Default admin profile image",
  },
  {
    key: "ADMIN_CONTACT",
    value: "+1-234-567-8901",
    desc: "Admin contact information",
  },
  {
    key: "ADMIN_PASSWORD",
    value: "adminpassword123",
    desc: "Admin default password",
  },
  {
    key: "ADMIN_EMAIL",
    value: "admin@myapp.com",
    desc: "Admin email address",
  },
  {
    key: "ADMIN_NAME",
    value: "Abu Jobayer",
    desc: "Admin display name",
  },
];

export const routes = [
  {
    method: "POST",
    route: "/api/v1/auth/login",
    desc: "User login",
    auth: "No",
  },
  {
    method: "POST",
    route: "/api/v1/auth/register",
    desc: "User registration",
    auth: "No",
  },
  {
    method: "POST",
    route: "/api/v1/auth/forgot-password",
    desc: "Request password reset",
    auth: "No",
  },
  {
    method: "POST",
    route: "/api/v1/auth/reset-password",
    desc: "Reset password",
    auth: "No",
  },
  {
    method: "POST",
    route: "/api/v1/auth/change-password",
    desc: "Change password",
    auth: "Yes (User)",
  },
  {
    method: "GET",
    route: "/api/v1/users",
    desc: "Get all users",
    auth: "Yes (Admin)",
  },
  {
    method: "GET",
    route: "/api/v1/users/profile",
    desc: "Get current user profile",
    auth: "Yes",
  },
  {
    method: "GET",
    route: "/api/v1/users/:id",
    desc: "Get user by ID",
    auth: "Yes",
  },
  {
    method: "PATCH",
    route: "/api/v1/users/:id",
    desc: "Update user",
    auth: "Yes",
  },
  {
    method: "DELETE",
    route: "/api/users/:id",
    desc: "Delete user",
    auth: "Yes (Admin)",
  },
];

export const infoData = [
  {
    title: "Modular Architecture",
    description:
      "Each feature is isolated in its own module with a clean separation of concerns between controllers, services, and data models.",
  },
  {
    title: "Type Safety",
    description:
      "Built with TypeScript to ensure type safety across your entire application with interface definitions for all models.",
  },
  {
    title: "Scalable Design",
    description:
      "Follows enterprise patterns that allow your application to scale from small projects to large, complex systems.",
  },
];

export const keyFeatures = [
  {
    icon: Lock,
    title: "Authentication",
    description:
      "Complete JWT authentication with access and refresh tokens, password reset, and account management.",
    bgColor: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
  },
  {
    icon: Database,
    title: "MongoDB Integration",
    description:
      "Mongoose ODM setup with models, schemas, and data validation for MongoDB interaction.",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Shield,
    title: "Request Validation",
    description:
      "Zod schema validation to ensure all API requests match expected data formats and types.",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description:
      "User roles and permissions system with middleware for protecting routes based on user roles.",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: FileText,
    title: "Error Handling",
    description:
      "Global error handler with custom error classes and consistent API error responses.",
    bgColor: "bg-red-500/10",
    iconColor: "text-red-400",
  },
  {
    icon: Settings,
    title: "Configuration",
    description:
      "Environment-based configuration system for managing different deployment environments.",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    icon: Terminal,
    title: "API Documentation",
    description:
      "Swagger UI integration for interactive API documentation and testing endpoints.",
    bgColor: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
  {
    icon: BookOpen,
    title: "Logging",
    description:
      "Advanced logging system with request tracking, error logging, and performance monitoring.",
    bgColor: "bg-teal-500/10",
    iconColor: "text-teal-400",
  },
];

export const navigation = [
  { name: "Installation", href: "#installation", id: "installation" },
  { name: "Configuration", href: "#configuration", id: "configuration" },
  { name: "Structure", href: "#structure", id: "structure" },
  { name: "API Routes", href: "#api", id: "api" },
  { name: "Features", href: "#features", id: "features" },
];
