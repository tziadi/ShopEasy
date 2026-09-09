// Static profile page - no authentication or database involved.
const user = {
  name: "Alex Morgan",
  email: "alex@example.com",
  membership: "Standard",
};

export const metadata = {
  title: "Profile - ShopEasy",
};

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>

      <div className="mt-8 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
            {user.name.charAt(0)}
          </div>
          <div>
            <p className="text-xl font-semibold text-slate-900">
              {user.name}
            </p>
            <p className="text-sm text-slate-500">{user.email}</p>
          </div>
        </div>

        <dl className="mt-8 space-y-4 border-t border-slate-200 pt-6">
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-slate-500">Full Name</dt>
            <dd className="text-sm text-slate-900">{user.name}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-slate-500">Email</dt>
            <dd className="text-sm text-slate-900">{user.email}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-slate-500">
              Membership
            </dt>
            <dd className="inline-block rounded-full bg-blue-50 px-3 py-0.5 text-sm font-medium text-blue-700">
              {user.membership}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
