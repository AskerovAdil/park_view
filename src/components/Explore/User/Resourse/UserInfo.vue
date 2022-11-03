<template>
    <div class=" w-full max-w-full  lg-max:mt-6 ">
        <div
            class="relative flex flex-col h-full min-w-0 bg-white border-0  shadow-xl rounded-2xl">
            <div class="p-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <div class="flex flex-wrap -mx-3">
                    <div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                        <h6 class="mb-0 dark:text-white">Profile Information</h6>
                    </div>
                    <div class="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                        <a href="javascript:;" data-target="tooltip_trigger">
                            <i class="leading-normal fas fa-user-edit text-sm text-slate-400 dark:text-white dark:opacity-80"
                                aria-hidden="true"></i>
                        </a>
                        <div class="px-2 py-1 text-center text-white bg-black rounded-lg text-sm hidden" id="tooltip"
                            style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1714.67px, -857.333px);"
                            data-popper-placement="top">
                            Edit Profile
                            <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow=""
                                style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-auto p-4">
                <p class="leading-normal text-sm dark:text-white dark:opacity-60">{{User.skills}}</p>
                <hr class="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent">
                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                    <li
                        class="relative block px-4 py-2 pt-0 pl-0 leading-normal border-0 rounded-t-lg text-sm text-inherit">
                        <strong class="text-slate-700 dark:text-white">Full Name:</strong> &nbsp; {{User.firstName + ' ' + User.lastName + ' ' + User.middleName}}</li>
                    <li class="relative block px-4 py-2 pl-0 leading-normal border-0 border-t-0 text-sm text-inherit">
                        <strong class="text-slate-700 dark:text-white">Mobile:</strong> &nbsp; {{User.phoneNumber}}</li>
                    <li class="relative block px-4 py-2 pl-0 leading-normal border-0 border-t-0 text-sm text-inherit">
                        <strong class="text-slate-700 dark:text-white">Email:</strong> &nbsp; {{User.email}}</li>
                    <li class="relative block px-4 py-2 pl-0 leading-normal border-0 border-t-0 text-sm text-inherit">
                        <strong class="text-slate-700 dark:text-white">Course:</strong> &nbsp; {{User.course}}</li>
                    <li class="relative block px-4 py-2 pb-0 pl-0 border-0 border-t-0 rounded-b-lg text-inherit">
                        <strong class="leading-normal text-sm text-slate-700 dark:text-white">Social:</strong> &nbsp;
                        <a class="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center text-blue-800 align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none"
                            href="javascript:;">
                            <i class="fab fa-facebook fa-lg" aria-hidden="true"></i>
                        </a>
                        <a class="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none text-sky-600"
                            href="javascript:;">
                            <i class="fab fa-twitter fa-lg" aria-hidden="true"></i>
                        </a>
                        <a class="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none text-sky-900"
                            href="javascript:;">
                            <i class="fab fa-instagram fa-lg" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<!--         public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? MiddleName { get; set; }
        public int Course { get; set; }

        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Telegram { get; set; }
        public string? Skills { get; set; }

        [JsonIgnore]
        public string? Password { get; set; }


        public Seconds.File? Photo { get; set; }

        public Role? Role { get; set; }
        public ICollection<News> News { get; set; } = new List<News>();
        public ICollection<Publication> Publications { get; set; } = new List<Publication>();
        public ICollection<Project> MentorProjects { get; set; } = new List<Project>();
        public ICollection<Project> MemberProjects { get; set; } = new List<Project>();
        public ICollection<Project> ConsulProjects { get; set; } = new List<Project>(); -->

<script>
export default {
    props:{
        User:Object
    }
}
</script>

<style lang="scss" scoped>

</style>