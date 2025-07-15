import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";
import { IUser } from "../models/user.model";

type EmailAddress = {
  email: string;
};

export const createdOrUpdateUser = async (
  id: string,
  first_name: string,
  last_name: string,
  image_url: string,
  email_addresses: EmailAddress[],
  username: string
): Promise<IUser | null> => {
  try {
    await connect();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          avatar: image_url,
          email: email_addresses[0].email,
          username: username,
        },
      },
      { new: true, upsert: true }
    );

    return user;
  } catch (error) {
    console.log("Error creating or updating user:", error);
    return null;
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connect();

    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log(`Error deleting user:`, error);
  }
};
