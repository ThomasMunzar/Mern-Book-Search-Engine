// Similar to user-controller file.
const resolvers = {
    Query: {
        me: async () => {
            return me.find({});
        }
    },

    Mutations: {
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(400).json({ message: "Can't find this user" });
            }
            const correctPw = await user.isCorrectPassword(body.password);

            if (!correctPw) {
                return res.status(400).json({ message: 'Wrong password!' });
            }
            const token = signToken(user);
            res.json({ token, user });
        },

        addUser: async (_, { email, password }) => {
            const user = await User.create(body);

            if (!user) {
                return res.status(400).json({ message: 'Something is wrong!' });
            }
            const token = signToken(user);
            res.json({ token, user });
        },

        saveBook: async (_, {bookInput}) => {
            console.log(user);
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: body } },
                    { new: true, runValidators: true }
                );
                return res.json(updatedUser);
            } catch (err) {
                console.log(err);
                return res.status(400).json(err);
            }
        },

        removeBook: async (_,{bookId} ) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              );
              if (!updatedUser) {
                return res.status(404).json({ message: "Couldn't find user with this id!" });
              }
              return res.json(updatedUser);
            },
        },
    };




