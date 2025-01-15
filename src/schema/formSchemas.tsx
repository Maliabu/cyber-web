import { z } from "zod";

export const addUserSchema = z.object({
    name: z.string({required_error: "Please enter your full name.",}).min(2, {
        message: "Please enter both names separated by a space bar"
    }).max(50),
    password: z.string(),
    email: z.string({required_error: "Please enter your email.",}).min(5, {
        message: "email too short"
    }).max(75).regex(/^([a-z]|[0-9])+[\.]*[\@]{1}[a-z]+[\.]{1}[a-z]{2,3}$/, {message: "please enter a correct email"}),
    token: z.string().min(15, {message: "missing token"}),
    username: z.string().min(2, {message: "missing username"}),
    profilePicture: z.string(),
    userType: z.string({required_error: "Please select the type of user.",}),
    confirmPassword: z.string({required_error: "Please confirm your password.",}),
    decInit: z.string(),
    encrPass: z.string({required_error: "Please enter a password.",}).min(2, {
        message: "Password must be atleast 8 characters"
    }).max(50),
    image: z.any()
}).superRefine(({ confirmPassword, encrPass }, ctx) => {
    if (confirmPassword !== encrPass) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ['confirmPassword']
      });
    }
  });

export const loginUserSchema = z.object({
    email: z.string({required_error: "Please enter your email.",}).min(5, {
        message: "email too short"
    }),
    password: z.string({required_error: "Please enter a password.",}).min(2, {
        message: "Password must be atleast 8 characters"
    }).max(50),
})

export const addEventSchema = z.object({
    title: z.string({required_error: "Please enter a title.",}).min(2, {
        message: "title should be atleast a character"
    }).max(50),
    description: z.string({required_error: "Please enter a description.",}),
    link: z.string(),
    image: z.string(),
    startDate: z.date({required_error: "Please enter a date.",}),
    endDate: z.date({required_error: "Please enter a date.",}),
    image1: z.any(),
})

//remember to coerce numbers else form doesnot submit
export const addCourseSchema = z.object({
    title: z.string({required_error: "Please enter a title.",}).min(2, {
        message: "title should be atleast a character"
    }).max(50),
    description: z.string({required_error: "Please enter a description.",}),
    courseOutline: z.string(),
    image: z.string(),
    mentor: z.coerce.number({required_error: "Please provide a mentor.",}),
    startDate: z.date({required_error: "Please enter a date.",}),
    endDate: z.date({required_error: "Please enter a date.",}),
    currency: z.coerce.number({required_error: "Please enter a currency.",}),
    amount: z.coerce.number({required_error: "Please enter a pricing for this course.",}),
    image1: z.any(),
    currency1: z.string(),
    mentor1: z.string(),
})
export const updateCourseSchema = z.object({
    title: z.string(),
    description: z.string({required_error: "Please enter a description.",}),
    courseOutline: z.string(),
    image: z.string(),
    mentor: z.coerce.number({required_error: "Please provide a mentor.",}),
    startDate: z.date({required_error: "Please enter a date.",}),
    endDate: z.date({required_error: "Please enter a date.",}),
    currency: z.coerce.number({required_error: "Please enter a currency.",}),
    amount: z.coerce.number({required_error: "Please enter a pricing for this course.",}),
    image1: z.any(),
    currency1: z.string(),
    mentor1: z.string(),
})

export const addArticleSchema = z.object({
    title: z.string({required_error: "Please enter a title.",}).min(2, {
        message: "title should be atleast a character"
    }).max(50),
    content: z.string({required_error: "Please enter a description.",}),
    link: z.string(),
    writer: z.string({required_error: "Please enter your name.",}),
    image: z.string(),
    image1: z.any(),
})

export const addEnrollmentSchema = z.object({
    courseId: z.coerce.number({required_error: "Please provide a mentor.",}),
    email: z.string({required_error: "Please enter your email.",}).min(5, {
        message: "email too short"
    }).max(75).regex(/^([a-z]|[0-9])+[\.]*[\@]{1}[a-z]+[\.]{1}[a-z]{2,3}$/, {message: "please enter a correct email"}),
    course1: z.string(),
})

export const addSubscriptionSchema = z.object({
    email: z.string({required_error: "Please enter your email.",}).min(5, {
        message: "email too short"
    }).max(75).regex(/^([a-z]|[0-9])+[\.]*[\@]{1}[a-z]+[\.]{1}[a-z]{2,3}$/, {message: "please enter a correct email"}),
})

export const search = z.object({
    search: z.string()
})

export const messagesSchema = z.object({
    email: z.string({required_error: "Please enter your email.",}).min(5, {
        message: "email too short"
    }).max(75).regex(/^([a-z]|[0-9])+[\.]*[\@]{1}[a-z]+[\.]{1}[a-z]{2,3}$/, {message: "please enter a correct email"}),
    message: z.string(),
})

export const addNextCourseSchema = z.object({
    courseId: z.coerce.number({required_error: "Please provide a mentor.",}),
    course1: z.string(),
})

export const deleteSchema = z.object({
    courseId: z.coerce.number({required_error: "Please provide a course to delete.",}),
})