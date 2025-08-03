import { useState } from 'react';
import { FiUser, FiCheckCircle, FiXCircle, FiMoreVertical } from 'react-icons/fi';

const tableHeading = [
  {
    colname: "Avatar",
    icon: <FiUser className="mr-1" />
  },
  {
    colname: "Name",
    icon: null
  },
  {
    colname: "Status",
    icon: null
  },
  {
    colname: "Actions",
    icon: null
  }
];

const tableData = [
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Alice Johnson",
    status: "Active",
    email: "alice@example.com",
    lastActive: "2 hours ago"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Bob Smith",
    status: "Inactive",
    email: "bob@example.com",
    lastActive: "5 days ago"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Carol Williams",
    status: "Active",
    email: "carol@example.com",
    lastActive: "30 minutes ago"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "David Brown",
    status: "Pending",
    email: "david@example.com",
    lastActive: "1 day ago"
  }
];

const statusColors = {
  Active: "bg-green-100 text-green-800",
  Inactive: "bg-red-100 text-red-800",
  Pending: "bg-yellow-100 text-yellow-800"
};

const Table = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 mb-16" id="contact">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            User <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Management</span>
          </h2>
          <p className="text-gray-600 mt-1">Manage your team members and their status</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {tableHeading.map((heading, index) => (
                  <th 
                    key={index} 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      {heading.icon}
                      {heading.colname}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((user, index) => (
                <>
                  <tr 
                    key={index} 
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => toggleRow(index)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 ">
                          <img className="h-10 w-10 rounded-full " src={user.avatar} alt="" />
                        </div> 
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full items-center ${statusColors[user.status]}`}>
                        {user.status === "Active" ? <FiCheckCircle className="mr-1" /> : <FiXCircle className="mr-1" />}
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <FiMoreVertical />
                      </button>
                    </td>
                  </tr>
                  {expandedRow === index && (
                    <tr className="bg-gray-50">
                      <td colSpan="4" className="px-6 py-4">
                        <div className="text-sm text-gray-500">
                          <p><span className="font-medium">Last Active:</span> {user.lastActive}</p>
                          <p><span className="font-medium">Email:</span> {user.email}</p>
                          <div className="mt-2 flex space-x-2">
                            <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition-colors">
                              Send Message
                            </button>
                            <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors">
                              View Profile
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> users
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;