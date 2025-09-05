# CyberNavy

CyberNavy is a cybersecurity project focused on providing real-time solutions for cybersecurity threats. It features a modern web interface and a Node.js backend, designed to help users monitor, detect, and respond to threats efficiently.

## Features
- Real-time threat detection and alerts
- User authentication and role-based dashboards (Admin/User)
- Secure user management
- Modern UI with Tailwind CSS
- RESTful API backend

## Installation
1. Clone the repository:
	```sh
	git clone https://github.com/omkar-jagtap8443/CyberNavy.git
	```
2. Install frontend dependencies:
	```sh
	cd cybernavy
	npm install
	```
3. Install backend dependencies:
	```sh
	cd backend
	npm install
	```
4. Start the backend server:
	```sh
	node server.js
	```
5. Start the frontend (Vite):
	```sh
	cd ..
	npm run dev
	```

## Usage
- Access the app at `http://localhost:5173` (default Vite port)
- Register or log in as a user or admin
- Explore dashboards and threat monitoring features

## Technologies Used
- React (frontend)
- Node.js & Express (backend)
- MongoDB (database)
- Tailwind CSS (styling)
- Vite (frontend build tool)

## Folder Structure
```
cybernavy/
  backend/         # Node.js backend (API, models, routes)
  public/          # Static assets
  src/             # React frontend source code
	 components/    # Reusable UI components
	 pages/         # Page-level components
	 assets/        # Images and icons
  ...              # Config files, README, etc.
```

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License
This project is licensed under the MIT License.
