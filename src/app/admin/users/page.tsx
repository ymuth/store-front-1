import { prisma } from '@prisma-db';
import Link from 'next/link';
import { deleteInvitation, deleteUserAccount } from './actions';
import DeleteConfirm from '@/components/ui/deleteConfirm';


export default async function UsersMenu() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            accounts: true,
        },
    });

    const invitations = await prisma.invitation.findMany({
        orderBy: { createdAt: 'desc' },
    });

    const now = new Date();

    function displayedDate(value: Date | null) {
        if (!value) return '—';
        return `${value.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}`;
    }

    function getInvitationStatus(invitation: { usedAt: Date | null; expiresAt: Date }) {
        if (invitation.usedAt) return 'Accepted';
        if (invitation.expiresAt < now) return 'Expired';
        return 'Pending';
    }



    return (
        <div>
            <div className='bg-linear-to-br from-amber-950 from-15% to-gray-900 fixed inset-0 -z-10' />

            <div className='m-10 mx-auto max-w-7xl overflow-x-auto'>
                <div className='mb-6 flex w-full items-center justify-between gap-4'>
                    <Link href='/admin/dashboard' className='rounded-full border border-white/80 bg-white px-4 py-2 font-semibold text-black shadow-sm transition hover:bg-gray-100'>← Back</Link>
                    <h1 className='flex-1 text-center text-2xl font-bold text-white'>Users & Access</h1>
                    <div className='w-24' />
                </div>

                <div className='space-y-8'>
                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-white'>Signed up users</h2>
                        <table className='w-full border text-black'>
                            <thead>
                                <tr className='text-left bg-neutral-200'>
                                    <th className='border p-4 font-extrabold'>Name</th>
                                    <th className='border p-4 font-extrabold'>Email</th>
                                    <th className='border p-4 font-extrabold'>Verified</th>
                                    <th className='border p-4 font-extrabold'>Created</th>
                                    <th className='border p-4 font-extrabold'>Updated</th>
                                    <th className='border p-4 font-extrabold'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.id} className={`${index % 2 !== 0 ? 'bg-neutral-200' : 'bg-neutral-400'} text-left`}>
                                        <td className='border p-4'>{user.name}</td>
                                        <td className='border p-4'>{user.email}</td>
                                        <td className={`border p-4 font-semibold ${user.emailVerified ? 'text-emerald-700' : 'text-rose-700'}`}>{user.emailVerified ? 'Yes' : 'No'}</td>
                                        <td className='border p-4'>{displayedDate(user.createdAt)}</td>
                                        <td className='border p-4'>{displayedDate(user.updatedAt)}</td>
                                        <td className='border p-4'>
                                            <DeleteConfirm
                                                action={deleteUserAccount.bind(null, user.id)}
                                                title="Delete user?"
                                                message={`Are you sure you want to permanently delete ${user.email}?`}
                                                buttonText="Delete user"
                                                confirmText="Delete user"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-white'>Invited users</h2>
                        <table className='w-full border text-black'>
                            <thead>
                                <tr className='text-left bg-neutral-200'>
                                    <th className='border p-4 font-extrabold'>Email</th>
                                    <th className='border p-4 font-extrabold'>Status</th>
                                    <th className='border p-4 font-extrabold'>Invited</th>
                                    <th className='border p-4 font-extrabold'>Accepted</th>
                                    <th className='border p-4 font-extrabold'>Expires</th>
                                    <th className='border p-4 font-extrabold'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invitations.map((invitation, index) => (
                                    <tr key={invitation.id} className={`${index % 2 !== 0 ? 'bg-neutral-200' : 'bg-neutral-400'} text-left`}>
                                        <td className='border p-4'>{invitation.email}</td>
                                        <td className={`border p-4 font-semibold border-black ${getInvitationStatus(invitation) === 'Accepted' ? 'text-emerald-700' : getInvitationStatus(invitation) === 'Expired' ? 'text-rose-700' : 'text-amber-700'}`}>{getInvitationStatus(invitation)}</td>
                                        <td className='border p-4'>{displayedDate(invitation.createdAt)}</td>
                                        <td className='border p-4'>{displayedDate(invitation.usedAt)}</td>
                                        <td className='border p-4'>{displayedDate(invitation.expiresAt)}</td>
                                        <td className='border p-4'>
                                            <DeleteConfirm
                                                action={deleteInvitation.bind(null, invitation.id)}
                                                title="Delete invitation?"
                                                message={`Are you sure you want to delete the invitation for ${invitation.email}?`}
                                                buttonText="Delete invite"
                                                confirmText="Delete invite"
                                                amber={true}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </div>
    );
}
