-- Drop the existing restrictive SELECT policy and recreate as a proper admin-only policy
DROP POLICY IF EXISTS "Admins can view all bookings" ON public.bookings;

-- Create a PERMISSIVE policy that only allows authenticated admin users to view bookings
-- This ensures ONLY admins can SELECT from bookings, and anonymous/public users cannot
CREATE POLICY "Only admins can view bookings" 
ON public.bookings 
FOR SELECT 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));