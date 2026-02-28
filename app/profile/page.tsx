// "use client";

// import { useEffect, useState } from "react";
// import {
//     User,
//     LogOut,
//     ShoppingBag,
//     Heart,
//     ShieldCheck,
//     Edit,
//     KeyRound,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface UserProfile {
//     user_id: number;
//     first_name: string;
//     last_name: string;
//     email: string;
//     phone: string;
//     verify: number;
//     total_orders: number;
// }

// export default function ProfilePage() {
//     const [profile, setProfile] = useState<UserProfile | null>(null);
//     const [loading, setLoading] = useState(true);

//     const userId = 1; // dynamic later

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const res = await fetch(`/api/profile?user_id=${userId}`);
//                 const data = await res.json();
//                 if (data.user) setProfile(data.user);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchProfile();
//     }, [userId]);

//     if (loading)
//         return (
//             <div className="text-center mt-40 text-lg text-gray-600">
//                 Loading Profile...
//             </div>
//         );

//     if (!profile)
//         return (
//             <div className="text-center mt-40 text-red-500">
//                 Failed to load profile
//             </div>
//         );

//     const fullName = `${profile.first_name} ${profile.last_name}`;

//     return (
//         <div className="min-h-screen bg-[#F6F1E9] pt-32 px-6 pb-20">
//             <div className="max-w-6xl mx-auto space-y-10">

//                 {/* ================= HEADER CARD ================= */}
//                 <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8 border">

//                     {/* Avatar */}
//                     <div className="w-28 h-28 rounded-full bg-[#1F3A2E] flex items-center justify-center text-white text-4xl font-semibold shadow-md">
//                         {profile.first_name.charAt(0)}
//                     </div>

//                     {/* User Info */}
//                     <div className="flex-1 space-y-2 text-center md:text-left">
//                         <h1 className="text-3xl font-semibold text-[#1F3A2E] flex items-center gap-3 justify-center md:justify-start">
//                             {fullName}
//                             {profile.verify === 1 && (
//                                 <ShieldCheck className="text-green-600 w-6 h-6" />
//                             )}
//                         </h1>

//                         <p className="text-gray-600">{profile.email}</p>
//                         <p className="text-gray-600">{profile.phone}</p>

//                         {/* Buttons */}
//                         <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
//                             <Button className="bg-[#1F3A2E] hover:bg-[#162b22] text-white">
//                                 <Edit className="mr-2 w-4 h-4" /> Update Profile
//                             </Button>

//                             <Button variant="outline">
//                                 <KeyRound className="mr-2 w-4 h-4" /> Change Password
//                             </Button>

//                             <Button variant="ghost" className="text-sm">
//                                 Forgot Password?
//                             </Button>

//                             <Button variant="destructive">
//                                 <LogOut className="mr-2 w-4 h-4" /> Logout
//                             </Button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ================= STATS SECTION ================= */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//                     <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border hover:shadow-lg transition">
//                         <div className="bg-[#1F3A2E] text-white p-3 rounded-full">
//                             <ShoppingBag />
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">Total Orders</p>
//                             <p className="text-2xl font-semibold text-[#1F3A2E]">
//                                 {profile.total_orders}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border hover:shadow-lg transition">
//                         <div className="bg-pink-500 text-white p-3 rounded-full">
//                             <Heart />
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">Wishlist Items</p>
//                             <p className="text-2xl font-semibold text-[#1F3A2E]">0</p>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border hover:shadow-lg transition">
//                         <div className="bg-green-600 text-white p-3 rounded-full">
//                             <User />
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">Account Status</p>
//                             <p className="text-2xl font-semibold text-[#1F3A2E]">
//                                 {profile.verify === 1 ? "Verified" : "Not Verified"}
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ================= ACCOUNT DETAILS ================= */}
//                 <div className="bg-white rounded-2xl shadow-lg p-8 border">
//                     <h2 className="text-xl font-semibold text-[#1F3A2E] mb-6">
//                         Account Information
//                     </h2>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
//                         <div>
//                             <p className="text-sm text-gray-500">Full Name</p>
//                             <p className="font-medium">{fullName}</p>
//                         </div>

//                         <div>
//                             <p className="text-sm text-gray-500">Email</p>
//                             <p className="font-medium">{profile.email}</p>
//                         </div>

//                         <div>
//                             <p className="text-sm text-gray-500">Phone</p>
//                             <p className="font-medium">+91 {profile.phone}</p>
//                         </div>

//                         <div>
//                             <p className="text-sm text-gray-500">User ID</p>
//                             <p className="font-medium">#{profile.user_id}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
















// "use client";

// import { useEffect, useState } from "react";
// import {
//     User,
//     LogOut,
//     ShoppingBag,
//     Heart,
//     ShieldCheck,
//     Edit,
//     KeyRound,
//     X,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface UserProfile {
//     user_id: number;
//     first_name: string;
//     last_name: string;
//     email: string;
//     phone: string;
//     verify: number;
//     total_orders: number;
// }

// export default function UpdateProfilePage() {
//     const [profile, setProfile] = useState<UserProfile | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [modalOpen, setModalOpen] = useState(false);

//     // modal inputs are separate state so changes don't immediately affect main profile
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");

//     const [updateLoading, setUpdateLoading] = useState(false);
//     const [message, setMessage] = useState("");

//     const userId = 1; // dynamic later

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const res = await fetch(`/api/profile?user_id=${userId}`);
//                 const data = await res.json();
//                 if (data.user) {
//                     setProfile(data.user);
//                     // initialize modal inputs
//                     setFirstName(data.user.first_name);
//                     setLastName(data.user.last_name);
//                     setEmail(data.user.email);
//                     setPhone(data.user.phone);
//                 }
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchProfile();
//     }, [userId]);

//     if (loading)
//         return (
//             <div className="text-center mt-40 text-lg text-gray-600">
//                 Loading Profile...
//             </div>
//         );

//     if (!profile)
//         return (
//             <div className="text-center mt-40 text-red-500">
//                 Failed to load profile
//             </div>
//         );

//     const fullName = `${profile.first_name} ${profile.last_name}`;

//     // ===== Update Profile =====
//     const handleUpdate = async () => {
//         setUpdateLoading(true);
//         setMessage("");

//         try {
//             const res = await fetch("/api/update-profile", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     user_id: profile.user_id,
//                     first_name: firstName,
//                     last_name: lastName,
//                     email: email,
//                     phone: phone,
//                 }),
//             });

//             const data = await res.json();
//             setUpdateLoading(false);

//             if (data.success) {
//                 setMessage("✅ Profile updated successfully!");
//                 // update main profile state so page updates
//                 setProfile({
//                     ...profile,
//                     first_name: firstName,
//                     last_name: lastName,
//                     email: email,
//                     phone: phone,
//                 });
//                 setModalOpen(false); // close modal
//             } else {
//                 setMessage("❌ Failed to update profile: " + data.message);
//             }
//         } catch (err) {
//             console.error(err);
//             setUpdateLoading(false);
//             setMessage("❌ Server error, please try again.");
//         }
//     };

//     return (
//         <div className="min-h-screen bg-[#F6F1E9] pt-32 px-6 pb-20">
//             <div className="max-w-6xl mx-auto space-y-10">
//                 {/* Header Card */}
//                 <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8 border">
//                     <div className="w-28 h-28 rounded-full bg-[#1F3A2E] flex items-center justify-center text-white text-4xl font-semibold shadow-md">
//                         {profile.first_name.charAt(0)}
//                     </div>

//                     <div className="flex-1 space-y-2 text-center md:text-left">
//                         <h1 className="text-3xl font-semibold text-[#1F3A2E] flex items-center gap-3 justify-center md:justify-start">
//                             {fullName}
//                             {profile.verify === 1 && (
//                                 <ShieldCheck className="text-green-600 w-6 h-6" />
//                             )}
//                         </h1>
//                         <p className="text-gray-600">{profile.email}</p>
//                         <p className="text-gray-600">{profile.phone}</p>

//                         <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
//                             <Button
//                                 className="bg-[#1F3A2E] hover:bg-[#162b22] text-white"
//                                 onClick={() => setModalOpen(true)}
//                             >
//                                 <Edit className="mr-2 w-4 h-4" /> Update Profile
//                             </Button>

//                             <Button variant="outline">
//                                 <KeyRound className="mr-2 w-4 h-4" /> Change Password
//                             </Button>

//                             <Button variant="ghost" className="text-sm">
//                                 Forgot Password?
//                             </Button>

//                             <Button variant="destructive">
//                                 <LogOut className="mr-2 w-4 h-4" /> Logout
//                             </Button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Stats Section */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border hover:shadow-lg transition">
//                         <div className="bg-[#1F3A2E] text-white p-3 rounded-full">
//                             <ShoppingBag />
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">Total Orders</p>
//                             <p className="text-2xl font-semibold text-[#1F3A2E]">
//                                 {profile.total_orders}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border hover:shadow-lg transition">
//                         <div className="bg-pink-500 text-white p-3 rounded-full">
//                             <Heart />
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">Wishlist Items</p>
//                             <p className="text-2xl font-semibold text-[#1F3A2E]">0</p>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border hover:shadow-lg transition">
//                         <div className="bg-green-600 text-white p-3 rounded-full">
//                             <User />
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">Account Status</p>
//                             <p className="text-2xl font-semibold text-[#1F3A2E]">
//                                 {profile.verify === 1 ? "Verified" : "Not Verified"}
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Account Details */}
//                 <div className="bg-white rounded-2xl shadow-lg p-8 border">
//                     <h2 className="text-xl font-semibold text-[#1F3A2E] mb-6">
//                         Account Information
//                     </h2>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
//                         <div>
//                             <p className="text-sm text-gray-500">Full Name</p>
//                             <p className="font-medium">{fullName}</p>
//                         </div>

//                         <div>
//                             <p className="text-sm text-gray-500">Email</p>
//                             <p className="font-medium">{profile.email}</p>
//                         </div>

//                         <div>
//                             <p className="text-sm text-gray-500">Phone</p>
//                             <p className="font-medium">+91 {profile.phone}</p>
//                         </div>

//                         <div>
//                             <p className="text-sm text-gray-500">User ID</p>
//                             <p className="font-medium">#{profile.user_id}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal */}
//             {modalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//                     <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
//                         <button
//                             onClick={() => setModalOpen(false)}
//                             className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//                         >
//                             <X className="w-5 h-5" />
//                         </button>

//                         <h2 className="text-xl font-semibold mb-4">Update Profile</h2>

//                         <div className="flex flex-col gap-3">
//                             <input
//                                 type="text"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                                 placeholder="First Name"
//                                 className="border rounded px-3 py-2"
//                             />
//                             <input
//                                 type="text"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                                 placeholder="Last Name"
//                                 className="border rounded px-3 py-2"
//                             />
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="Email"
//                                 className="border rounded px-3 py-2"
//                             />
//                             <input
//                                 type="tel"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 placeholder="Phone"
//                                 className="border rounded px-3 py-2"
//                             />

//                             <Button
//                                 className="bg-[#1F3A2E] hover:bg-[#162b22] text-white mt-3"
//                                 onClick={handleUpdate}
//                                 disabled={updateLoading}
//                             >
//                                 {updateLoading ? "Updating..." : <>Update Profile</>}
//                             </Button>

//                             {message && <p className="mt-2 text-sm">{message}</p>}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
















"use client";

import { useEffect, useState } from "react";
import {
    User,
    LogOut,
    ShoppingBag,
    Heart,
    ShieldCheck,
    Edit,
    KeyRound,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";

interface UserProfile {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    verify: number;
    total_orders: number;
}

export default function UpdateProfilePage() {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [passwordModalOpen, setPasswordModalOpen] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState("");

    const [updateLoading, setUpdateLoading] = useState(false);
    const [message, setMessage] = useState("");

  const { user } = useAuth()

  const user_id = user?.user_id;
  // ✅ Fetch product by ID
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch(`/api/profile?user_id=${user_id}`);
                const data = await res.json();
                if (data.user) {
                    setProfile(data.user);
                    setFirstName(data.user.first_name);
                    setLastName(data.user.last_name);
                    setEmail(data.user.email);
                    setPhone(data.user.phone);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [user_id]);

    if (loading) return <div className="text-center mt-40">Loading Profile...</div>;
    if (!profile) return <div className="text-center mt-40 text-red-500">Failed</div>;

    const fullName = `${profile.first_name} ${profile.last_name}`;

    // ✅ FIXED: define resetToken
    const resetToken = profile.user_id;

    const handleUpdate = async () => {
        setUpdateLoading(true);
        setMessage("");

        const res = await fetch("/api/update-profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: profile.user_id,
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
            }),
        });

        const data = await res.json();
        setUpdateLoading(false);

        if (data.success) {
            setProfile({ ...profile, first_name: firstName, last_name: lastName, email, phone });
            setModalOpen(false);
        } else {
            setMessage("❌ " + data.message);
        }
    };

    const handleResetPassword = async () => {
        if (!newPassword || !confirmPassword) {
            setPasswordMessage("❌ All fields are required");
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordMessage("❌ Passwords do not match");
            return;
        }

        setPasswordLoading(true);
        setPasswordMessage("");

        try {
            const res = await fetch("/api/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    reset_token: resetToken, // ✅ MUST exist
                    new_password: newPassword, // ✅ EXACT KEY
                }),
            });

            const data = await res.json();
            setPasswordLoading(false);

            if (data.status) {
                setPasswordMessage("✅ Password reset successfully");
                setPasswordModalOpen(false);
                setNewPassword("");
                setConfirmPassword("");
            } else {
                setPasswordMessage("❌ " + data.message);
            }
        } catch (err) {
            console.error(err);
            setPasswordLoading(false);
            setPasswordMessage("❌ Server error");
        }
    };
    return (
        <div className="min-h-screen bg-[#F6F1E9] pt-32 px-6 pb-20">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Header Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8 border">
                    <div className="w-28 h-28 rounded-full bg-[#1F3A2E] flex items-center justify-center text-white text-4xl font-semibold shadow-md">
                        {profile.first_name.charAt(0)}
                    </div>

                    <div className="flex-1 space-y-2 text-center md:text-left">
                        <h1 className="text-3xl font-semibold text-[#1F3A2E] flex items-center gap-3 justify-center md:justify-start">
                            {fullName}
                            {profile.verify === 1 && (
                                <ShieldCheck className="text-green-600 w-6 h-6" />
                            )}
                        </h1>
                        <p className="text-gray-600">{profile.email}</p>
                        <p className="text-gray-600">{profile.phone}</p>

                        <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                            <Button
                                className="bg-[#1F3A2E] hover:bg-[#162b22] text-white"
                                onClick={() => setModalOpen(true)}
                            >
                                <Edit className="mr-2 w-4 h-4" /> Update Profile
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => setPasswordModalOpen(true)}
                            >
                                <KeyRound className="mr-2 w-4 h-4" /> Change Password
                            </Button>
                            <Button variant="ghost" className="text-sm">
                                Forgot Password?
                            </Button>

                            <Button variant="destructive">
                                <LogOut className="mr-2 w-4 h-4" /> Logout
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border hover:shadow-lg transition">
                        <div className="bg-[#1F3A2E] text-white p-3 rounded-full">
                            <ShoppingBag />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Orders</p>
                            <p className="text-2xl font-semibold text-[#1F3A2E]">
                                {profile.total_orders}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border hover:shadow-lg transition">
                        <div className="bg-pink-500 text-white p-3 rounded-full">
                            <Heart />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Wishlist Items</p>
                            <p className="text-2xl font-semibold text-[#1F3A2E]">0</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 border hover:shadow-lg transition">
                        <div className="bg-green-600 text-white p-3 rounded-full">
                            <User />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Account Status</p>
                            <p className="text-2xl font-semibold text-[#1F3A2E]">
                                {profile.verify === 1 ? "Verified" : "Not Verified"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Account Details */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border">
                    <h2 className="text-xl font-semibold text-[#1F3A2E] mb-6">
                        Account Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                        <div>
                            <p className="text-sm text-gray-500">Full Name</p>
                            <p className="font-medium">{fullName}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium">{profile.email}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium">+91 {profile.phone}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">User ID</p>
                            <p className="font-medium">#{profile.user_id}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>

                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                                className="border rounded px-3 py-2"
                            />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"
                                className="border rounded px-3 py-2"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="border rounded px-3 py-2"
                            />
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone"
                                className="border rounded px-3 py-2"
                            />

                            <Button
                                className="bg-[#1F3A2E] hover:bg-[#162b22] text-white mt-3"
                                onClick={handleUpdate}
                                disabled={updateLoading}
                            >
                                {updateLoading ? "Updating..." : <>Update Profile</>}
                            </Button>

                            {message && <p className="mt-2 text-sm">{message}</p>}
                        </div>
                    </div>
                </div>
            )}

            {passwordModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
                        <button
                            onClick={() => setPasswordModalOpen(false)}
                            className="absolute top-3 right-3 text-gray-500"
                        >
                            <X />
                        </button>

                        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>

                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border rounded px-3 py-2 w-full mb-3"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border rounded px-3 py-2 w-full mb-4"
                        />

                        <Button
                            className="bg-[#1F3A2E] text-white w-full"
                            onClick={handleResetPassword}
                            disabled={passwordLoading}
                        >
                            {passwordLoading ? "Updating..." : "Reset Password"}
                        </Button>

                        {passwordMessage && (
                            <p className="mt-3 text-sm">{passwordMessage}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}